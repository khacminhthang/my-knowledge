import { Routes } from '@angular/router';
import { IntroRxjsObservableComponent } from '../intro-rxjs-observable/intro-rxjs-observable.component';
import { RxjsCombinationOperatorsComponent } from '../rxjs-combination-operators/rxjs-combination-operators.component';
import { RxjsCreationOperatorsComponent } from '../rxjs-creation-operators/rxjs-creation-operators.component';
import { RxjsErrorHandlingComponent } from '../rxjs-error-handling/rxjs-error-handling.component';
import { RxjsFilteringOperatorsComponent } from '../rxjs-filtering-operators/rxjs-filtering-operators.component';
import { RxjsHoosComponent } from '../rxjs-hoos/rxjs-hoos.component';
import { RxjsSubjectComponent } from '../rxjs-subject/rxjs-subject.component';
import { TransformationOperatorsComponent } from '../transformation-operators/transformation-operators.component';

export const RXJS_ROUTES: Routes = [
  { path: 'intro-rxjs-observable', component: IntroRxjsObservableComponent },
  { path: 'rxjs-creation-operators', component: RxjsCreationOperatorsComponent },
  { path: 'transformation-operators', component: TransformationOperatorsComponent },
  { path: 'filtering-operators', component: RxjsFilteringOperatorsComponent },
  { path: 'combination-operators', component: RxjsCombinationOperatorsComponent },
  { path: 'error-handling', component: RxjsErrorHandlingComponent },
  { path: 'rxjs-higher-order-observables', component: RxjsHoosComponent },
  { path: 'rxjs-hoos', redirectTo: 'rxjs-higher-order-observables', pathMatch: 'full' },
  { path: 'rxjs-subject', component: RxjsSubjectComponent },
];
