import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { menuAngular, menuCSharp, menuDotNetCore, menuEFCore, menuMessageBroker, menuMicroFrontend } from 'src/assets/menu';

@Component({
  selector: 'app-main-shell',
  templateUrl: './main-shell.component.html',
  styleUrls: ['./main-shell.component.css']
})
export class MainShellComponent implements OnInit {

  menuList: any;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((param) => {
      let pathname = window.location.pathname.split('/')[1];
      switch (pathname) {
        case 'angular':
          {
            this.menuList = menuAngular;
            break;
          }
        case 'csharp':
          {
            this.menuList = menuCSharp;
            break;
          }
        case 'dotnetcore':
          {
            this.menuList = menuDotNetCore;
            break;
          }
        case 'efcore':
          {
            this.menuList = menuEFCore;
            break;
          }
        case 'message-broker':
          {
            this.menuList = menuMessageBroker;
            break;
          }
        case 'micro-fe':
          {
            this.menuList = menuMicroFrontend;
            break;
          }
        default:
          {
            this.menuList = menuAngular;
            break;
          }
      }
    })
  }
}
