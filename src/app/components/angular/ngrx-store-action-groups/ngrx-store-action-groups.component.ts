import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngrx-store-action-groups',
  templateUrl: './ngrx-store-action-groups.component.html',
  styleUrls: ['./ngrx-store-action-groups.component.css']
})
export class NgrxStoreActionGroupsComponent implements OnInit {

  text1 = `
  import { createActionGroup, emptyProps, props } from '@ngrx/store';

  export const ProductsPageActions = createActionGroup({
    source: 'Products Page',
    events: {
      // defining an event without payload using the emptyProps function
      'Opened': emptyProps(),

      // defining an event with payload using the props function
      'Pagination Changed': props<{ page: number; offset: number }>(),

      // defining an event with payload using the props factory
      'Query Changed': (query: string) => ({ query }),
    },
  });
  `

  text2 = `
  import { Component, inject, OnInit } from '@angular/core';
  import { Store } from '@ngrx/store';

  import { ProductsPageActions } from './products-page.actions';

  @Component({ /* ... */ })
  export class ProductsComponent implements OnInit {
    private readonly store = inject(Store);

    ngOnInit(): void {
      // action type: [Products Page] Opened
      this.store.dispatch(ProductsPageActions.opened());
    }

    onPaginationChange(page: number, offset: number): void {
      // action type: [Products Page] Pagination Changed
      this.store.dispatch(
        ProductsPageActions.paginationChanged({ page, offset })
      );
    }

    onQueryChange(query: string): void {
      // action type: [Products Page] Query Changed
      this.store.dispatch(ProductsPageActions.queryChanged(query));
    }
  }
  `
  text3 = `
  import { createActionGroup, props } from '@ngrx/store';

  import { Product } from './product.model';

  export const ProductsApiActions = createActionGroup({
    source: 'Products API',
    events: {
      productsLoadedSuccess: props<{ products: Product[] }>(),
      productsLoadedFailure: props<{ errorMsg: string }>(),
    },
  });

  // generated action creators:
  const {
    productsLoadedSuccess, // type: "[Products API] productsLoadedSuccess"
    productsLoadedFailure, // type: "[Products API] productsLoadedFailure"
  } = ProductsApiActions;
  `

  constructor() { }

  ngOnInit(): void {
  }

}
