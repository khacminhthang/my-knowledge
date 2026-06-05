import { NgModule } from '@angular/core';
import { AngularSharedFeatureModule } from './angular-shared-feature.module';
import { IntroRxjsObservableComponent } from './intro-rxjs-observable/intro-rxjs-observable.component';
import { RxjsCombinationOperatorsComponent } from './rxjs-combination-operators/rxjs-combination-operators.component';
import { RxjsCreationOperatorsComponent } from './rxjs-creation-operators/rxjs-creation-operators.component';
import { RxjsErrorHandlingComponent } from './rxjs-error-handling/rxjs-error-handling.component';
import { RxjsFilteringOperatorsComponent } from './rxjs-filtering-operators/rxjs-filtering-operators.component';
import { RxjsHoosComponent } from './rxjs-hoos/rxjs-hoos.component';
import { RxjsSubjectComponent } from './rxjs-subject/rxjs-subject.component';
import { TransformationOperatorsComponent } from './transformation-operators/transformation-operators.component';

@NgModule({
  declarations: [
    IntroRxjsObservableComponent,
    RxjsCreationOperatorsComponent,
    TransformationOperatorsComponent,
    RxjsFilteringOperatorsComponent,
    RxjsCombinationOperatorsComponent,
    RxjsErrorHandlingComponent,
    RxjsHoosComponent,
    RxjsSubjectComponent,
  ],
  imports: [AngularSharedFeatureModule],
})
export class AngularRxjsModule {}
