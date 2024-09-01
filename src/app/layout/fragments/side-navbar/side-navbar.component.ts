import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {

  currentUrl: string;

  @Input() menuList: any;

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

  isExpanded(menu: any): boolean {
    if (menu.children) {
      return menu.children.some((submenu: { routerLink: string; }) => this.currentUrl.includes(submenu.routerLink));
    }
    return false;
  }
}
