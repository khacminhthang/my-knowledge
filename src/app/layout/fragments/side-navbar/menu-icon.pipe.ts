import { Pipe, PipeTransform } from '@angular/core';
import { MenuNode } from 'src/app/core/interface/IMenu';

/**
 * Tự động chọn icon Material phù hợp với nội dung của mục menu
 * dựa trên `text` và `routerLink`. Nếu không khớp từ khoá nào,
 * pipe sẽ giữ lại icon gốc (nếu có) hoặc dùng icon mặc định.
 */
@Pipe({ name: 'menuIcon', standalone: false })
export class MenuIconPipe implements PipeTransform {

  /** Bảng ánh xạ từ khoá -> icon. Thứ tự quan trọng: khớp từ trên xuống. */
  private static readonly ICON_RULES: ReadonlyArray<readonly [RegExp, string]> = [
    // --- Tổng quan / giới thiệu ---
    [/\b(overview|intro|introduction|gioi thieu|tong quan|getting started|get start)\b/, 'flag'],
    [/\b(why|tai sao)\b/, 'help'],

    // --- NgRx / State management ---
    [/ngrx|store|state|redux/, 'inventory'],
    [/\beffect/, 'bolt'],
    [/\bselector/, 'filter_alt'],
    [/\breducer/, 'merge_type'],
    [/\baction/, 'play_circle'],
    [/\bentity|entities\b/, 'view_list'],
    [/\bsignal/, 'sensors'],

    // --- RxJS ---
    [/observable|rxjs|subject|multicast/, 'stream'],
    [/operator/, 'functions'],

    // --- Router ---
    [/router|route|navigat|lazy load|lazy-load/, 'alt_route'],
    [/guard|resolver/, 'shield'],

    // --- Forms ---
    [/reactive form|template.?driven|async validator|\bform\b|validator/, 'dynamic_form'],

    // --- Dependency Injection ---
    [/dependency injection|dependence injection|inject/, 'hub'],

    // --- Component / Template / Directive ---
    [/data binding/, 'sync_alt'],
    [/structure directive|attribute directive|directive/, 'tune'],
    [/content projection|content child|ng.?template|template variable/, 'dashboard_customize'],
    [/component interaction|dynamic component|component/, 'widgets'],
    [/\bpipe\b/, 'filter_alt'],

    // --- Micro frontend / Module federation / Nx ---
    [/micro.?frontend|micro.?fe|module federation/, 'grid_view'],
    [/\bnx\b/, 'account_tree'],
    [/architecture/, 'architecture'],
    [/install|cai dat|setup/, 'download'],
    [/build/, 'build'],
    [/version/, 'history'],

    // --- Message broker ---
    [/rabbitmq/, 'pets'],
    [/kafka/, 'forum'],
    [/message.?broker|broker|queue/, 'mark_email_unread'],

    // --- Design pattern / Architecture ---
    [/repository/, 'inventory_2'],
    [/unit of work/, 'work'],
    [/cqrs/, 'call_split'],
    [/clean architecture|design pattern/, 'architecture'],

    // --- EF Core / Database ---
    [/dbcontext|database|ef.?core|existing database/, 'storage'],
    [/quer/, 'search'],
    [/saving data|insert data|saving/, 'save'],
    [/stored procedure|raw sql|sql/, 'data_object'],
    [/one.?to.?many|one.?to.?one|many.?to.?many|fluent|configuration|convention/, 'schema'],
    [/change.?tracker|shadow property/, 'track_changes'],
    [/logging|log\b/, 'receipt_long'],

    // --- C# / Lập trình cơ bản ---
    [/\bclass(es)?\b|object/, 'data_object'],
    [/interface/, 'integration_instructions'],
    [/inheritance|ke thua/, 'account_tree'],
    [/polymorphism|da hinh/, 'transform'],
    [/encapsulation|dong goi/, 'lock'],
    [/method|phuong thuc|function/, 'functions'],
    [/loop|vong lap/, 'loop'],
    [/if|else|switch|flow control/, 'fork_right'],
    [/operator|toan tu/, 'calculate'],
    [/data type|kieu du lieu|variable|bien\b/, 'data_array'],
    [/string|chuoi/, 'text_fields'],
    [/array|mang/, 'data_array'],
    [/enum/, 'list'],
    [/exception|loi\b/, 'error_outline'],
    [/file i\/o|file io|file/, 'description'],
    [/regular expression|regex/, 'pattern'],
    [/delegate|event/, 'campaign'],
    [/generic/, 'category'],
    [/collection/, 'collections_bookmark'],
    [/thread|multithread/, 'linear_scale'],
    [/reflection|attribute/, 'auto_awesome'],
    [/namespace/, 'folder_special'],

    // --- Nhóm chung ---
    [/syntax|cu phap|structure|cau truc/, 'code'],
    [/advanced|nang cao/, 'rocket_launch'],
    [/basic|co ban/, 'school'],
    [/typescript/, 'code'],
  ];

  /** Icon mặc định cho mục lá và mục nhóm khi không khớp luật nào. */
  private static readonly DEFAULT_LEAF = 'article';
  private static readonly DEFAULT_GROUP = 'folder';

  /** Bộ nhớ đệm để tránh tính lại nhiều lần cho cùng một mục. */
  private static readonly cache = new Map<string, string>();

  transform(menu: MenuNode | null | undefined): string {
    if (!menu) {
      return MenuIconPipe.DEFAULT_LEAF;
    }

    const hasChildren = !!menu.children?.length;
    const cacheKey = `${menu.text}|${menu.routerLink ?? ''}|${hasChildren}`;
    const cached = MenuIconPipe.cache.get(cacheKey);
    if (cached) {
      return cached;
    }

    const haystack = MenuIconPipe.normalize(`${menu.text} ${menu.routerLink ?? ''}`);

    let resolved: string | undefined;
    for (const [pattern, icon] of MenuIconPipe.ICON_RULES) {
      if (pattern.test(haystack)) {
        resolved = icon;
        break;
      }
    }

    if (!resolved) {
      // Không khớp luật: ưu tiên icon gốc nếu nó không phải icon chung chung.
      const generic = ['all_inbox', 'inventory_2', 'category', 'layers'];
      if (menu.icon && !generic.includes(menu.icon)) {
        resolved = menu.icon;
      } else {
        resolved = hasChildren ? MenuIconPipe.DEFAULT_GROUP : MenuIconPipe.DEFAULT_LEAF;
      }
    }

    MenuIconPipe.cache.set(cacheKey, resolved);
    return resolved;
  }

  /** Bỏ dấu tiếng Việt và chuyển về chữ thường để so khớp ổn định. */
  private static normalize(value: string): string {
    return value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd');
  }
}
