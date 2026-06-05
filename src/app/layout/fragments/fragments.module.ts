import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { MainShellComponent } from './main-shell/main-shell.component';
import { MenuIconPipe } from './side-navbar/menu-icon.pipe';

@NgModule({
  declarations: [SidebarComponent, SideNavbarComponent, HeaderComponent, FooterComponent,MainShellComponent, MenuIconPipe],
  exports: [SidebarComponent, SideNavbarComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,MaterialModule, RouterModule, HttpClientModule, HttpClientJsonpModule
  ]
})
export class FragmentsModule { }
