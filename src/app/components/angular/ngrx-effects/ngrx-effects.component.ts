import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngrx-effects',
  templateUrl: './ngrx-effects.component.html',
  styleUrls: ['./ngrx-effects.component.css']
})
export class NgrxEffectsComponent implements OnInit {

  text1 = `
    @Component({
    template: 
      <li *ngFor="let movie of movies">
        {{ movie.name }}
      </li>
    
  })
  export class MoviesPageComponent {
    movies: Movie[];

    constructor(private movieService: MoviesService) {}

    ngOnInit() {
      this.movieService.getAll().subscribe(movies => this.movies = movies);
    }
  }
  `
  text2 = `
  @Injectable({
    providedIn: 'root'
  })
  export class MoviesService {
    constructor (private http: HttpClient) {}

    getAll() {
      return this.http.get('/movies');
    }
  }
  `
  text3 = `
  @Component({
    template: 
      <div *ngFor="let movie of movies$ | async">
        {{ movie.name }}
      </div>
    
  })
  export class MoviesPageComponent {
    movies$: Observable<Movie[]> = this.store.select(state => state.movies);

    constructor(private store: Store<{ movies: Movie[] }>) {}

    ngOnInit() {
      this.store.dispatch({ type: '[Movies Page] Load Movies' });
    }
  }
  `
  text4 = `
  import { Injectable } from '@angular/core';
  import { Actions, createEffect, ofType } from '@ngrx/effects';
  import { EMPTY } from 'rxjs';
  import { map, exhaustMap, catchError } from 'rxjs/operators';
  import { MoviesService } from './movies.service';

  @Injectable()
  export class MoviesEffects {

    loadMovies$ = createEffect(() => this.actions$.pipe(
      ofType('[Movies Page] Load Movies'),
      exhaustMap(() => this.moviesService.getAll()
        .pipe(
          map(movies => ({ type: '[Movies API] Movies Loaded Success', payload: movies })),
          catchError(() => EMPTY)
        ))
      )
    );

    constructor(
      private actions$: Actions,
      private moviesService: MoviesService
    ) {}
  }
  `
  text5 = `
  import { Injectable } from '@angular/core';
  import { Actions, createEffect, ofType } from '@ngrx/effects';
  import { of } from 'rxjs';
  import { map, exhaustMap, catchError } from 'rxjs/operators';
  import { MoviesService } from './movies.service';

  @Injectable()
  export class MoviesEffects {

    loadMovies$ = createEffect(() =>
      this.actions$.pipe(
        ofType('[Movies Page] Load Movies'),
        exhaustMap(() => this.moviesService.getAll()
          .pipe(
            map(movies => ({ type: '[Movies API] Movies Loaded Success', payload: movies })),
            catchError(() => of({ type: '[Movies API] Movies Loaded Error' }))
          )
        )
      )
    );

    constructor(
      private actions$: Actions,
      private moviesService: MoviesService
    ) {}
  }
  `
  text6 = `
  import { inject } from '@angular/core';
  import { catchError, exhaustMap, map, of, tap } from 'rxjs';
  import { Actions, createEffect, ofType } from '@ngrx/effects';

  import { ActorsService } from './actors.service';
  import { ActorsPageActions } from './actors-page.actions';
  import { ActorsApiActions } from './actors-api.actions';

  export const loadActors = createEffect(
    (actions$ = inject(Actions), actorsService = inject(ActorsService)) => {
      return actions$.pipe(
        ofType(ActorsPageActions.opened),
        exhaustMap(() =>
          actorsService.getAll().pipe(
            map((actors) => ActorsApiActions.actorsLoadedSuccess({ actors })),
            catchError((error: { message: string }) =>
              of(ActorsApiActions.actorsLoadedFailure({ errorMsg: error.message }))
            )
          )
        )
      );
    },
    { functional: true }
  );

  export const displayErrorAlert = createEffect(
    () => {
      return inject(Actions).pipe(
        ofType(ActorsApiActions.actorsLoadedFailure),
        tap(({ errorMsg }) => alert(errorMsg))
      );
    },
    { functional: true, dispatch: false }
  );
  `
  text7 = `
  import { NgModule } from '@angular/core';
  import { EffectsModule } from '@ngrx/effects';

  import { MoviesEffects } from './effects/movies.effects';
  import * as actorsEffects from './effects/actors.effects';

  @NgModule({
    imports: [
      EffectsModule.forRoot(MoviesEffects, actorsEffects),
    ],
  })
  export class AppModule {}
  `
  text8 = `
  import { bootstrapApplication } from '@angular/platform-browser';
  import { provideStore } from '@ngrx/store';
  import { provideEffects } from '@ngrx/effects';

  import { AppComponent } from './app.component';
  import { MoviesEffects } from './effects/movies.effects';
  import * as actorsEffects from './effects/actors.effects';

  bootstrapApplication(AppComponent, {
    providers: [
      provideStore(),
      provideEffects(MoviesEffects, actorsEffects),
    ],
  });
  `
  text9 = `
  import { NgModule } from '@angular/core';
  import { EffectsModule } from '@ngrx/effects';

  import { MoviesEffects } from './effects/movies.effects';
  import * as actorsEffects from './effects/actors.effects';

  @NgModule({
    imports: [
      EffectsModule.forFeature(MoviesEffects, actorsEffects)
    ],
  })
  export class MovieModule {}
  `
  text10 = `
  import { Route } from '@angular/router';
  import { provideEffects } from '@ngrx/effects';

  import { MoviesEffects } from './effects/movies.effects';
  import * as actorsEffects from './effects/actors.effects';

  export const routes: Route[] = [
    {
      path: 'movies',
      providers: [
        provideEffects(MoviesEffects, actorsEffects)
      ]
    }
  ];
  `
  text11 = `
  providers: [
    MoviesEffects,
    {
      provide: USER_PROVIDED_EFFECTS,
      multi: true,
      useValue: [MoviesEffects],
    },
  ]
  `
  text12 = `
  import { NgModule } from '@angular/core';
  import { EffectsModule, provideEffects } from '@ngrx/effects';

  import { MoviesEffects } from './effects/movies.effects';
  import * as actorsEffects from './effects/actors.effects';

  @NgModule({
    imports: [
      EffectsModule.forRoot(MoviesEffects, actorsEffects),
    ],
    providers: [
      provideEffects(MoviesEffects, actorsEffects)
    ]
  })
  export class AppModule {}
  `
  text13 = `
  import { createAction, props } from '@ngrx/store';
  import { Credentials } from '../models/user';

  export const login = createAction(
    '[Login Page] Login',
    props<{ credentials: Credentials }>()
  );
  `
  text14 = `
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
  text15 = `
  import { Injectable } from '@angular/core';
  import { Store } from '@ngrx/store';
  import { Actions, ofType, createEffect, concatLatestFrom } from '@ngrx/effects';
  import { tap } from 'rxjs/operators';
  import { CollectionApiActions } from '../actions';
  import * as fromBooks from '../reducers';

  @Injectable()
  export class CollectionEffects {
    addBookToCollectionSuccess$ = createEffect(
      () =>
        this.actions$.pipe(
          ofType(CollectionApiActions.addBookSuccess),
          concatLatestFrom(action => this.store.select(fromBooks.getCollectionBookIds)),
          tap(([action, bookCollection]) => {
            if (bookCollection.length === 1) {
              window.alert('Congrats on adding your first book!');
            } else {
              window.alert('You have added book number ' + bookCollection.length);
            }
          })
        ),
      { dispatch: false }
    );

    constructor(
      private actions$: Actions,
      private store: Store<fromBooks.State>
    ) {}
  }
  `
  text16 = `
  import { Injectable } from '@angular/core';
  import { Observable, fromEvent } from 'rxjs';
  import { concatMap } from 'rxjs/operators';
  import { createEffect } from '@ngrx/effects';

  import { UserActivityService } from '../services/user-activity.service';

  @Injectable()
  export class UserActivityEffects {
    trackUserActivity$ = createEffect(() =>
      fromEvent(document, 'click').pipe(
        concatMap(event => this.userActivityService.trackUserActivity(event)),
      ), { dispatch: false }
    );

    constructor(
      private userActivityService: UserActivityService,
    ) {}
  }
  `
  constructor() { }

  ngOnInit(): void {
  }

}
