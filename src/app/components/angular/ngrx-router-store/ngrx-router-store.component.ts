import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngrx-router-store',
  templateUrl: './ngrx-router-store.component.html',
  styleUrls: ['./ngrx-router-store.component.css']
})
export class NgrxRouterStoreComponent implements OnInit {

  text1 = `
  import { ApplicationConfig } from '@angular/core';
  import { provideRouter } from '@angular/router';
  import { provideStore } from '@ngrx/store';
  import { provideRouterStore, routerReducer } from '@ngrx/router-store';

  export const appConfig: ApplicationConfig = {
    providers: [
      provideRouter([
        // routes
      ]),
      provideStore({
        router: routerReducer,
      }),
      provideRouterStore()
    ],
  };
  `
  constructor() { }

  ngOnInit(): void {
  }

}
