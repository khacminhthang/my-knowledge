import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngrx-store-feture-creators',
  templateUrl: './ngrx-store-feture-creators.component.html',
  styleUrls: ['./ngrx-store-feture-creators.component.css']
})
export class NgrxStoreFetureCreatorsComponent implements OnInit {

  text1 = `
  import { createFeature, createReducer, on } from '@ngrx/store';
  import { Book } from './book.model';

  import * as BookListPageActions from './book-list-page.actions';
  import * as BooksApiActions from './books-api.actions';

  interface State {
    books: Book[];
    loading: boolean;
  }

  const initialState: State = {
    books: [],
    loading: false,
  };

  export const booksFeature = createFeature({
    name: 'books',
    reducer: createReducer(
      initialState,
      on(BookListPageActions.enter, (state) => ({
        ...state,
        loading: true,
      })),
      on(BooksApiActions.loadBooksSuccess, (state, { books }) => ({
        ...state,
        books,
        loading: false,
      }))
    ),
  });

  export const {
    name, // feature name
    reducer, // feature reducer
    selectBooksState, // feature selector
    selectBooks, // selector for books property
    selectLoading, // selector for loading property
  } = booksFeature;
  `
  text2 = `
  import { createSelector } from '@ngrx/store';
  import { booksFeature } from './books.reducer';

  export const selectBookListPageViewModel = createSelector(
    booksFeature.selectBooks,
    booksFeature.selectLoading,
    (books, loading) => ({ books, loading })
  );
  `
  text3 = `
  import { createFeature, createReducer, on } from '@ngrx/store';
  import { Book } from './book.model';

  import * as BookListPageActions from './book-list-page.actions';

  interface State {
    books: Book[];
    query: string;
  }

  const initialState: State = {
    books: [],
    query: '',
  };

  export const booksFeature = createFeature({
    name: 'books',
    reducer: createReducer(
      initialState,
      on(BookListPageActions.search, (state, action) => ({
        ...state,
        query: action.query,
      })),
    ),
    extraSelectors: ({ selectQuery, selectBooks }) => ({
      selectFilteredBooks: createSelector(
        selectQuery,
        selectBooks,
        (query, books) => books.filter(book => book.title.includes(query)),
      ),
    }),
  });
  `
  text4 = `
  import { createFeature, createReducer, on } from '@ngrx/store';
  import { Book } from './book.model';

  import * as BookListPageActions from './book-list-page.actions';

  interface State {
    books: Book[];
    query: string;
  }

  const initialState: State = {
    books: [],
    query: '',
  };

  export const booksFeature = createFeature({
    name: 'books',
    reducer: createReducer(
      initialState,
      on(BookListPageActions.search, (state, action) => ({
        ...state,
        query: action.query,
      }))
    ),
    extraSelectors: ({ selectQuery, selectBooks }) => {
      const selectFilteredBooks = createSelector(
        selectQuery,
        selectBooks,
        (query, books) => books.filter((book) => book.title.includes(query))
      );
      const selectFilteredBooksWithRating = createSelector(
        selectFilteredBooks,
        (books) => books.filter((book) => book.ratingsCount >= 1)
      );

      return { selectFilteredBooks, selectFilteredBooksWithRating };
    },
  });
  `
  text5 = `
  import { NgModule } from '@angular/core';
  import { StoreModule } from '@ngrx/store';

  import { booksFeature } from './books.reducer';

  @NgModule({
    imports: [StoreModule.forFeature(booksFeature)],
  })
  export class BooksModule {}
  `

  text6 = `
  import { bootstrapApplication } from '@angular/platform-browser';
  import { provideStore, provideState } from '@ngrx/store';

  import { AppComponent } from './app.component';
  import { booksFeature } from './books.reducer';

  bootstrapApplication(AppComponent, {
    providers: [
      provideStore(),
      provideState(booksFeature)
    ],
  });
  `
  text7 = `
  import { Route } from '@angular/router';
  import { provideState } from '@ngrx/store';

  import { booksFeature } from './books.reducer';

  export const routes: Route[] = [
    {
      path: 'books',
      providers: [
        provideState(booksFeature)
      ]
    }
  ];
  `
  text8 =`
  interface State {
    books: Book[];
    activeBookId?: string;
  }

  const initialState: State = {
    books: [],
  };
  `
  text9 =`
  interface State {
    books: Book[];
    activeBookId: string | null;
    // or activeBookId: string | undefined;
  }

  const initialState: State = {
    books: [],
    activeBookId: null,
    // or activeBookId: undefined,
  };
  `
  constructor() { }

  ngOnInit(): void {
  }

}
