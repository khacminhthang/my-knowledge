import { NgModule } from '@angular/core';
import { AngularRoutingModule } from './angular-routing.module';
import { AngularCommonConceptsModule } from './angular-common-concepts.module';
import { AngularRxjsModule } from './angular-rxjs.module';
import { AngularRouterConceptsModule } from './angular-router-concepts.module';
import { AngularFormsModule } from './angular-forms.module';
import { AngularNgrxModule } from './angular-ngrx.module';

@NgModule({
  imports: [
    AngularRoutingModule,
    AngularCommonConceptsModule,
    AngularRxjsModule,
    AngularRouterConceptsModule,
    AngularFormsModule,
    AngularNgrxModule,
  ]
})
export class AngularModule { }
