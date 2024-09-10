import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngrx-effects-lifecycle',
  templateUrl: './ngrx-effects-lifecycle.component.html',
  styleUrls: ['./ngrx-effects-lifecycle.component.css']
})
export class NgrxEffectsLifecycleComponent implements OnInit {
  text1 = `
  init$ = createEffect(() => 
    this.actions$.pipe(
      ofType(ROOT_EFFECTS_INIT),
      map(action => ...)
    )
  );
  `
  text2 = `
  import { Injectable } from '@angular/core';
  import { Actions, createEffect } from '@ngrx/effects';
  import { tap } from 'rxjs/operators';

  @Injectable()
  export class LogEffects {
    constructor(private actions$: Actions) {}
    
    logActions$ = createEffect(() =>
      this.actions$.pipe(
        tap(action => console.log(action))
      ), { dispatch: false });
  }
  `
  text3 = `
  import { Injectable } from '@angular/core';
  import { Actions, ofType, createEffect } from '@ngrx/effects';
  import { of } from 'rxjs';
  import { catchError, exhaustMap, map } from 'rxjs/operators';
  import {
    LoginPageActions,
    AuthApiActions,
  } from '../actions';
  import { AuthService } from '../services/auth.service';

  @Injectable()
  export class AuthEffects {
    logins$ = createEffect(
      () =>
        this.actions$.pipe(
          ofType(LoginPageActions.login),
          exhaustMap(action =>
            this.authService.login(action.credentials).pipe(
              map(user => AuthApiActions.loginSuccess({ user })),
              catchError(error => of(AuthApiActions.loginFailure({ error })))
            )
          )
          // Errors are handled and it is safe to disable resubscription
        ),
      { useEffectsErrorHandler: false }
    );

    constructor(
      private actions$: Actions,
      private authService: AuthService
    ) {}
  }
  `
  text4 = `
  import { ErrorHandler, NgModule } from '@angular/core';
  import { Observable, throwError } from 'rxjs';
  import { retryWhen, mergeMap } from 'rxjs/operators';
  import { Action } from '@ngrx/store';
  import { EffectsModule, EFFECTS_ERROR_HANDLER } from '@ngrx/effects';
  import { MoviesEffects } from './effects/movies.effects';
  import { CustomErrorHandler, isRetryable } from '../custom-error-handler';

  export function effectResubscriptionHandler>T extends Action<(
    observable$: Observable>T<,
    errorHandler?: CustomErrorHandler
  ): Observable>T< {
    return observable$.pipe(
      retryWhen(errors =>
        errors.pipe(
          mergeMap(e => {
            if (isRetryable(e)) {
              return errorHandler.handleRetryableError(e);
            }

            errorHandler.handleError(e);
            return throwError(() => e);
          })
        )
      )
    );
  }

  @NgModule({
    imports: [EffectsModule.forRoot([MoviesEffects])],
    providers: [
      {
        provide: EFFECTS_ERROR_HANDLER,
        useValue: effectResubscriptionHandler,
      },
      {
        provide: ErrorHandler, 
        useClass: CustomErrorHandler 
      }
    ],
  })
  `
  text5 = `
  class UserEffects implements OnInitEffects {
    ngrxOnInitEffects(): Action {
      return { type: '[UserEffects]: Init' };
    }
  }
  `
  text6 = `
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
  import { exhaustMap, takeUntil, tap } from 'rxjs/operators';
  import {
    Actions,
    OnRunEffects,
    EffectNotification,
    ofType,
    createEffect,
  } from '@ngrx/effects';

  @Injectable()
  export class UserEffects implements OnRunEffects {
    constructor(private actions$: Actions) {}

    updateUser$ = createEffect(() =>
        this.actions$.pipe(
          ofType('UPDATE_USER'),
          tap(action => {
            console.log(action);
          })
        ),
      { dispatch: false });

    ngrxOnRunEffects(resolvedEffects$: Observable<EffectNotification>) {
      return this.actions$.pipe(
        ofType('LOGGED_IN'),
        exhaustMap(() =>
          resolvedEffects$.pipe(
            takeUntil(this.actions$.pipe(ofType('LOGGED_OUT')))
          )
        )
      );
    }
  }
  `
  text7 = `
  class EffectWithIdentifier implements OnIdentifyEffects {
    constructor(private effectIdentifier: string) {}

    ngrxOnIdentifyEffects() {
      return this.effectIdentifier;
    }
  }
  `

  constructor() { }

  ngOnInit(): void {
  }

}
