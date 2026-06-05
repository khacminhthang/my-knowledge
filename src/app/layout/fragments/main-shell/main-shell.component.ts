import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MenuNode } from 'src/app/core/interface/IMenu';
import { menuAngular, menuCSharp, menuDotNetCore, menuEFCore, menuMessageBroker, menuMicroFrontend } from 'src/assets/menu';

type MenuKey = 'angular' | 'csharp' | 'dotnetcore' | 'efcore' | 'message-broker' | 'micro-fe';

const MENU_BY_KEY: Record<MenuKey, MenuNode[]> = {
  angular: menuAngular,
  csharp: menuCSharp,
  dotnetcore: menuDotNetCore,
  efcore: menuEFCore,
  'message-broker': menuMessageBroker,
  'micro-fe': menuMicroFrontend,
};

@Component({
  standalone: false,
  selector: 'app-main-shell',
  templateUrl: './main-shell.component.html',
  styleUrls: ['./main-shell.component.css']
})
export class MainShellComponent implements OnInit {

  menuList: MenuNode[] = menuAngular;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.syncMenuFromRouteData());

    this.syncMenuFromRouteData();
  }

  private syncMenuFromRouteData(): void {
    const menuKey = this.findMenuKey(this.activatedRoute.root);
    this.menuList = MENU_BY_KEY[menuKey ?? 'angular'];
  }

  private findMenuKey(route: ActivatedRoute): MenuKey | null {
    const key = route.snapshot.data?.menuKey as MenuKey | undefined;
    if (key) {
      return key;
    }

    if (route.firstChild) {
      return this.findMenuKey(route.firstChild);
    }

    return null;
  }
}
