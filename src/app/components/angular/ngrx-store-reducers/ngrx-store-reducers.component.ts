import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngrx-store-reducers',
  templateUrl: './ngrx-store-reducers.component.html',
  styleUrls: ['./ngrx-store-reducers.component.css']
})
export class NgrxStoreReducersComponent implements OnInit {

  text1 = `
  import { createAction, props } from '@ngrx/store';

  export const homeScore = createAction('[Scoreboard Page] Home Score');
  export const awayScore = createAction('[Scoreboard Page] Away Score');
  export const resetScore = createAction('[Scoreboard Page] Score Reset');
  export const setScores = createAction('[Scoreboard Page] Set Scores', props<{game: Game}>());
  `
  text2 = `
  import { Action, createReducer, on } from '@ngrx/store';
  import * as ScoreboardPageActions from '../actions/scoreboard-page.actions';

  export interface State {
    home: number;
    away: number;
  }
  `
  text3 = `
  export const initialState: State = {
    home: 0,
    away: 0,
  };
  `
  text4 = `
  export const scoreboardReducer = createReducer(
    initialState,
    on(ScoreboardPageActions.homeScore, state => ({ ...state, home: state.home + 1 })),
    on(ScoreboardPageActions.awayScore, state => ({ ...state, away: state.away + 1 })),
    on(ScoreboardPageActions.resetScore, state => ({ home: 0, away: 0 })),
    on(ScoreboardPageActions.setScores, (state, { game }) => ({ home: game.home, away: game.away }))
  );
  `
  text5 = `
  import { NgModule } from '@angular/core';
  import { StoreModule } from '@ngrx/store';
  import { scoreboardReducer } from './reducers/scoreboard.reducer';

  @NgModule({
    imports: [
      StoreModule.forRoot({ game: scoreboardReducer })
    ],
  })
  export class AppModule {}
  `
  text6 = `
  import { bootstrapApplication } from '@angular/platform-browser';
  import { provideStore, provideState } from '@ngrx/store';

  import { AppComponent } from './app.component';
  import { scoreboardReducer } from './reducers/scoreboard.reducer';

  bootstrapApplication(AppComponent, {
    providers: [
      provideStore(),
      provideState({ name: 'game', reducer: scoreboardReducer })
    ],
  });
  `
  text7 = `
  import { NgModule } from '@angular/core';
  import { StoreModule } from '@ngrx/store';

  @NgModule({
    imports: [
      StoreModule.forRoot({})
    ],
  })
  export class AppModule {}
  `
  text8 = `
  import { bootstrapApplication } from '@angular/platform-browser';
  import { provideStore } from '@ngrx/store';

  import { AppComponent } from './app.component';

  bootstrapApplication(AppComponent, {
    providers: [
      provideStore()
    ],
  });
  `
  text9 = `
  export const scoreboardFeatureKey = 'game';
  `
  text10 = `
  import { NgModule } from '@angular/core';
  import { StoreModule } from '@ngrx/store';
  import { scoreboardFeatureKey, scoreboardReducer } from './reducers/scoreboard.reducer';
    
  @NgModule({
    imports: [
      StoreModule.forFeature(scoreboardFeatureKey, scoreboardReducer)
    ],
  })
  export class ScoreboardModule {}
  `
  text11 = `
  import { Route } from '@angular/router';
  import { provideState } from '@ngrx/store';

  import { scoreboardFeatureKey, scoreboardReducer } from './reducers/scoreboard.reducer';

  export const routes: Route[] = [
    {
      path: 'scoreboard',
      providers: [
        provideState({ name: scoreboardFeatureKey, reducer: scoreboardReducer })
      ]
    }
  ];
  `
  text12 = `
  import { NgModule } from '@angular/core';
  import { StoreModule } from '@ngrx/store';
  import { ScoreboardModule } from './scoreboard/scoreboard.module';

  @NgModule({
    imports: [
      StoreModule.forRoot({}),
      ScoreboardModule
    ],
  })
  export class AppModule {}
  `
  text13 = `
  import { bootstrapApplication } from '@angular/platform-browser';
  import { provideStore } from '@ngrx/store';

  import { AppComponent } from './app.component';
  import { scoreboardFeatureKey, scoreboardReducer } from './reducers/scoreboard.reducer';

  bootstrapApplication(AppComponent, {
    providers: [
      provideStore({ [scoreboardFeatureKey]: scoreboardReducer }),
    ]
  });
  `
  text14 = `
  {
    game: { home: 0, away: 0 }
  }
  `
  text15 = `
  import { NgModule } from '@angular/core';
  import { StoreModule, provideStore } from '@ngrx/store';
  import { scoreboardReducer } from './reducers/scoreboard.reducer';

  @NgModule({
    imports: [
      StoreModule.forRoot({ game: scoreboardReducer })
    ],
    providers: [
      provideStore({ game: scoreboardReducer })
    ]
  })
  export class AppModule {}
  `
  constructor() { }

  ngOnInit(): void {
  }

}
