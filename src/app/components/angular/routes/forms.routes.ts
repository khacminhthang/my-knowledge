import { Routes } from '@angular/router';
import { AsyncValidatorComponent } from '../async-validator/async-validator.component';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';
import { ReactiveForm2Component } from '../reactive-form2/reactive-form2.component';
import { TemplateDrivenFormComponent } from '../template-driven-form/template-driven-form.component';
import { TemplateDrivenForm2Component } from '../template-driven-form2/template-driven-form2.component';

export const FORM_ROUTES: Routes = [
  { path: 'template-driven-form-1', component: TemplateDrivenFormComponent },
  { path: 'template-driven-form-2', component: TemplateDrivenForm2Component },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'reactive-form-2', component: ReactiveForm2Component },
  { path: 'async-validator', component: AsyncValidatorComponent },
];
