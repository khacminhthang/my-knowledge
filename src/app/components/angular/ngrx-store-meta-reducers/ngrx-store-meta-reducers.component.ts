import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngrx-store-meta-reducers',
  templateUrl: './ngrx-store-meta-reducers.component.html',
  styleUrls: ['./ngrx-store-meta-reducers.component.css']
})
export class NgrxStoreMetaReducersComponent implements OnInit {

  text1 = `
  import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
  import { reducers } from './reducers';

  // console.log all actions
  export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
    return function(state, action) {
      console.log('state', state);
      console.log('action', action);

      return reducer(state, action);
    };
  }

  export const metaReducers: MetaReducer<any>[] = [debug];

  @NgModule({
    imports: [
      StoreModule.forRoot(reducers, { metaReducers })
    ],
  })
  export class AppModule {}
  `
  constructor() { }

  ngOnInit(): void {
  }

}
