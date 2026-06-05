import { AfterViewInit, Directive, ElementRef, inject } from '@angular/core';
import { Router } from '@angular/router';

declare const Prism: any;

/**
 * Tự động tô màu cú pháp (syntax highlighting) cho mọi khối <pre><code> trong app
 * bằng Prism.js. Hỗ trợ cả markup cũ dạng <pre><code><pre>{{text}}</pre></code></pre>
 * bằng cách "làm phẳng" thẻ <pre> lồng bên trong.
 */
@Directive({
  selector: 'pre',
  standalone: false,
})
export class HighlightCodeDirective implements AfterViewInit {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly router = inject(Router);

  ngAfterViewInit(): void {
    const pre = this.el.nativeElement;
    const code = pre.querySelector(':scope > code') as HTMLElement | null;

    // Chỉ xử lý thẻ <pre> ngoài cùng có chứa <code>; bỏ qua <pre> lồng bên trong.
    if (!code) {
      return;
    }

    // Làm phẳng <pre> lồng bên trong <code> (mẫu markup cũ) để Prism nhận text thuần.
    const innerPre = code.querySelector('pre');
    if (innerPre) {
      code.textContent = innerPre.textContent ?? '';
    }

    // Không ghi đè nếu đã chỉ định ngôn ngữ tường minh.
    const hasLanguage = Array.from(code.classList).some((c) => c.startsWith('language-'));
    if (!hasLanguage) {
      code.classList.add(`language-${this.detectLanguage()}`);
    }

    if (typeof Prism !== 'undefined') {
      Prism.highlightElement(code);
    }

    this.addCopyButton(pre, code);
  }

  private addCopyButton(pre: HTMLElement, code: HTMLElement): void {
    if (pre.querySelector(':scope > .code-copy-btn')) {
      return;
    }

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'code-copy-btn';
    button.setAttribute('aria-label', 'Sao chép code');
    button.innerHTML = `${HighlightCodeDirective.COPY_ICON}<span>Copy</span>`;

    button.addEventListener('click', () => this.copyToClipboard(code, button));
    pre.appendChild(button);
  }

  private async copyToClipboard(code: HTMLElement, button: HTMLButtonElement): Promise<void> {
    const text = code.innerText;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const range = document.createRange();
      range.selectNodeContents(code);
      const selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
      document.execCommand('copy');
      selection?.removeAllRanges();
    }

    button.classList.add('copied');
    button.innerHTML = `${HighlightCodeDirective.CHECK_ICON}<span>Đã copy</span>`;
    setTimeout(() => {
      button.classList.remove('copied');
      button.innerHTML = `${HighlightCodeDirective.COPY_ICON}<span>Copy</span>`;
    }, 1500);
  }

  private detectLanguage(): string {
    const url = this.router.url;
    if (url.includes('/csharp') || url.includes('/dotnetcore') || url.includes('/efcore')) {
      return 'csharp';
    }
    return 'typescript';
  }

  private static readonly COPY_ICON =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';

  private static readonly CHECK_ICON =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
}

