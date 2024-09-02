import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngrx-store-actions',
  templateUrl: './ngrx-store-actions.component.html',
  styleUrls: ['./ngrx-store-actions.component.css']
})
export class NgrxStoreActionsComponent implements OnInit {

  text1 =`
  interface Action {
    type: string;
  }
  `
  text2 = `
  {
    type: '[Auth API] Login Success'
  }
  `
  text3 = `
  {
    type: '[Login Page] Login',
    username: string;
    password: string;
  }
  `
  text4 = `
  import { createAction, props } from '@ngrx/store';

  export const login = createAction(
    '[Login Page] Login',
    props<{ username: string; password: string }>()
  );
  `
  text5 = `
  onSubmit(username: string, password: string) {
    store.dispatch(login({ username: username, password: password }));
  }
  `
  constructor() { }

  ngOnInit(): void {
  }

}
