import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngrx-store-selectors',
  templateUrl: './ngrx-store-selectors.component.html',
  styleUrls: ['./ngrx-store-selectors.component.css']
})
export class NgrxStoreSelectorsComponent implements OnInit {

  text1 = `
  import { createSelector } from '@ngrx/store';

  export interface FeatureState {
    counter: number;
  }

  export interface AppState {
    feature: FeatureState;
  }

  export const selectFeature = (state: AppState) => state.feature;

  export const selectFeatureCount = createSelector(
    selectFeature,
    (state: FeatureState) => state.counter
  );
  `
  text2 = `
  import { createSelector } from '@ngrx/store';

  export interface User {
    id: number;
    name: string;
  }

  export interface Book {
    id: number;
    userId: number;
    name: string;
  }

  export interface AppState {
    selectedUser: User;
    allBooks: Book[];
  }

  export const selectUser = (state: AppState) => state.selectedUser;
  export const selectAllBooks = (state: AppState) => state.allBooks;

  export const selectVisibleBooks = createSelector(
    selectUser,
    selectAllBooks,
    (selectedUser: User, allBooks: Book[]) => {
      if (selectedUser && allBooks) {
        return allBooks.filter((book: Book) => book.userId === selectedUser.id);
      } else {
        return allBooks;
      }
    }
  );
  `
  text3 = `
  export const selectCount = createSelector(
    selectCounterValue,
    (counter, props) => counter * props.multiply
  );
  `
  text4 = `
  ngOnInit() {
    this.counter = this.store.select(fromRoot.selectCount, { multiply: 2 })
  }
  `
  text5 = `
  export const selectCount = () =>
    createSelector(
      (state, props) => state.counter[props.id],
      (counter, props) => counter * props.multiply
    );
  `
  text6 = `
  ngOnInit() {
    this.counter2 = this.store.select(fromRoot.selectCount(), { id: 'counter2', multiply: 2 });
    this.counter4 = this.store.select(fromRoot.selectCount(), { id: 'counter4', multiply: 4 });
    this.counter6 = this.store.select(fromRoot.selectCount(), { id: 'counter6', multiply: 6 });
  }
  `
  text7 = `
  import { createSelector, createFeatureSelector } from '@ngrx/store';

  export const featureKey = 'feature';

  export interface FeatureState {
    counter: number;
  }

  export const selectFeature = createFeatureSelector<FeatureState>(featureKey);

  export const selectFeatureCount = createSelector(
    selectFeature,
    (state: FeatureState) => state.counter
  );
  `
  text8 = `
  import { createSelector } from '@ngrx/store';

  export interface State {
    counter1: number;
    counter2: number;
  }

  export const selectCounter1 = (state: State) => state.counter1;
  export const selectCounter2 = (state: State) => state.counter2;
  export const selectTotal = createSelector(
    selectCounter1,
    selectCounter2,
    (counter1, counter2) => counter1 + counter2
  ); // selectTotal has a memoized value of null, because it has not yet been invoked.

  let state = { counter1: 3, counter2: 4 };

  selectTotal(state); // computes the sum of 3 & 4, returning 7. selectTotal now has a memoized value of 7
  selectTotal(state); // does not compute the sum of 3 & 4. selectTotal instead returns the memoized value of 7

  state = { ...state, counter2: 5 };

  selectTotal(state); // computes the sum of 3 & 5, returning 8. selectTotal now has a memoized value of 8
  `
  text9 = `
  selectTotal(state); // returns the memoized value of 8
  selectTotal.release(); // memoized value of selectTotal is now null
  `
  text10 = `
  export interface State {
    evenNums: number[];
    oddNums: number[];
  }

  export const selectSumEvenNums = createSelector(
    (state: State) => state.evenNums,
    evenNums => evenNums.reduce((prev, curr) => prev + curr)
  );
  export const selectSumOddNums = createSelector(
    (state: State) => state.oddNums,
    oddNums => oddNums.reduce((prev, curr) => prev + curr)
  );
  export const selectTotal = createSelector(
    selectSumEvenNums,
    selectSumOddNums,
    (evenSum, oddSum) => evenSum + oddSum
  );

  selectTotal({
    evenNums: [2, 4],
    oddNums: [1, 3],
  });

  /**
   * Memoized Values before calling selectTotal.release()
   *   selectSumEvenNums  6
   *   selectSumOddNums   4
   *   selectTotal        10
   */

  selectTotal.release();

  /**
   * Memoized Values after calling selectTotal.release()
   *   selectSumEvenNums  null
   *   selectSumOddNums   null
   *   selectTotal        null
   */
  `
  text11 = `
  export class AppComponent {
    counter$ = this.store.select(fromCounter.selectCounter);

    constructor(private readonly store: Store) {}
  }
  `
  text12 = `
  import { createSelector, createFeatureSelector } from '@ngrx/store';

  export const featureKey = 'feature';

  export interface FeatureState {
    counter: number;
  }

  // selectFeature will have the type MemoizedSelector<object, FeatureState>
  export const selectFeature = createFeatureSelector<FeatureState>(featureKey);

  // selectFeatureCount will have the type MemoizedSelector<object, number>
  export const selectFeatureCount = createSelector(
    selectFeature,
    state => state.counter
  );
  `
  text13 = `
  import { Component, inject } from '@angular/core';
  import { NgFor } from '@angular/common';
  import { Store } from '@ngrx/store';

  import { selectUsers } from './users.selectors';

  @Component({
    standalone: true,
    imports: [NgFor],
    template: 
      <h1>Users</h1>
      <ul>
        <li *ngFor="let user of users()">
          {{ user.name }}
        </li>
      </ul>
    
  })
  export class UsersComponent {
    private readonly store = inject(Store);

    // type: Signal<User[]>
    readonly users = this.store.selectSignal(selectUsers);
  }
  `
  text14 = `
  import { map, filter } from 'rxjs/operators';

  store
    .pipe(
      map(state => selectValues(state)),
      filter(val => val !== undefined)
    )
    .subscribe(/* .. */);
  `
  text15 = `
  import { select } from '@ngrx/store';
  import { map, filter } from 'rxjs/operators';

  store
    .pipe(
      select(selectValues),
      filter(val => val !== undefined)
    )
  .subscribe(/* .. */);
  `
  text16 = `
  export const selectProjectedValues = createSelector(
    selectFoo,
    selectBar,
    (foo, bar) => {
      if (foo && bar) {
        return { foo, bar };
      }

      return undefined;
    }
  );
  `
  text17 = `
  // The number of state transitions is given by the user (subscriber)
  export const selectLastStateTransitions = (count: number) => {

    return pipe(
     // Thanks to createSelector the operator will have memoization "for free"
     select(selectProjectedValues),
     // Combines the last count state values in array
     scan((acc, curr) => {
        return [ curr, ...acc ].filter((val, index) => index < count && val !== undefined)
      }, [] as {foo: number; bar: string}[]) // XX: Explicit type hint for the array.
                                            // Equivalent to what is emitted by the selector
    );
  }
  `
  text18 = `
  // Subscribe to the store using the custom pipeable operator
  store.pipe(selectLastStateTransitions(3)).subscribe(/* .. */);
  `
  constructor() { }

  ngOnInit(): void {
  }

}
