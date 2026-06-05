import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type AppTheme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly storageKey = 'app-theme';
  private readonly themeSubject = new BehaviorSubject<AppTheme>(this.getInitialTheme());

  readonly theme$ = this.themeSubject.asObservable();

  constructor() {
    this.applyTheme(this.themeSubject.value);
  }

  get currentTheme(): AppTheme {
    return this.themeSubject.value;
  }

  toggleTheme(): void {
    this.setTheme(this.currentTheme === 'dark' ? 'light' : 'dark');
  }

  setTheme(theme: AppTheme): void {
    this.applyTheme(theme);
    localStorage.setItem(this.storageKey, theme);
    this.themeSubject.next(theme);
  }

  private applyTheme(theme: AppTheme): void {
    document.documentElement.setAttribute('data-bs-theme', theme);
  }

  private getInitialTheme(): AppTheme {
    const saved = localStorage.getItem(this.storageKey) as AppTheme | null;
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }
    const prefersLight = window.matchMedia?.('(prefers-color-scheme: light)').matches;
    return prefersLight ? 'light' : 'dark';
  }
}
