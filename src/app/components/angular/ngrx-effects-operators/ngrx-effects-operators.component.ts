import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngrx-effects-operators',
  templateUrl: './ngrx-effects-operators.component.html',
  styleUrls: ['./ngrx-effects-operators.component.css']
})
export class NgrxEffectsOperatorsComponent implements OnInit {

  text1 = `
  import { Injectable } from '@angular/core';
  import { Actions, ofType, createEffect } from '@ngrx/effects';
  import { of } from 'rxjs';
  import { catchError, exhaustMap, map } from 'rxjs/operators';
  import {
    LoginPageActions,
    AuthApiActions,
  } from '../actions';
  import { Credentials } from '../models/user';
  import { AuthService } from '../services/auth.service';

  @Injectable()
  export class AuthEffects {
    login$ = createEffect(() =>
      this.actions$.pipe(
        // Filters by Action Creator 'login'
        ofType(LoginPageActions.login),
        exhaustMap(action =>
          this.authService.login(action.credentials).pipe(
            map(user => AuthApiActions.loginSuccess({ user })),
            catchError(error => of(AuthApiActions.loginFailure({ error })))
          )
        )
      )
    );

    constructor(
      private actions$: Actions,
      private authService: AuthService
    ) {}
  }
  `
  constructor() { }

  ngOnInit(): void {
  }

}
