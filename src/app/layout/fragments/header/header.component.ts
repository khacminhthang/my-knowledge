import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AppTheme, ThemeService } from 'src/app/core/services/theme.service';

@Component({
  standalone: false,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isMenuOpen = false;
  currentUrl = '';
  theme: AppTheme = 'dark';

  constructor(private router: Router, private themeService: ThemeService) {
    this.themeService.theme$.subscribe(theme => this.theme = theme);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects;
      }
    });
  }

  ngOnInit() {
    this.currentUrl = this.router.url;
  }

  isSectionActive(prefix: string): boolean {
    return this.currentUrl.startsWith(prefix);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
