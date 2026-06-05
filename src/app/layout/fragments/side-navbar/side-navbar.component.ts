import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuNode } from 'src/app/core/interface/IMenu';

@Component({
  standalone: false,
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {

  currentUrl = '';

  @Input() menuList: MenuNode[] = [];

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects;
      }
    });
  }

  ngOnInit() {
    this.currentUrl = this.router.url;
  }

  getPaddingClass(level: number): string {
    return `padding-level-${level}`;
  }

  isExpanded(menu: MenuNode): boolean {
    if (!menu.children?.length) {
      return false;
    }

    return menu.children.some((submenu: MenuNode) => this.isRouteActive(submenu));
  }

  private isRouteActive(menu: MenuNode): boolean {
    if (menu.routerLink && menu.routerLink !== '#') {
      return this.currentUrl.includes(menu.routerLink);
    }

    return menu.children?.some((submenu: MenuNode) => this.isRouteActive(submenu)) ?? false;
  }
}
