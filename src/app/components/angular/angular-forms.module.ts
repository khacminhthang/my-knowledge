import { NgModule } from '@angular/core';
import { AngularSharedFeatureModule } from './angular-shared-feature.module';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { TemplateDrivenForm2Component } from './template-driven-form2/template-driven-form2.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveForm2Component } from './reactive-form2/reactive-form2.component';
import { AsyncValidatorComponent } from './async-validator/async-validator.component';

@NgModule({
  declarations: [
    TemplateDrivenFormComponent,
    TemplateDrivenForm2Component,
    ReactiveFormComponent,
    ReactiveForm2Component,
    AsyncValidatorComponent,
  ],
  imports: [AngularSharedFeatureModule],
})
export class AngularFormsModule {}
