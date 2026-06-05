import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainShellComponent } from 'src/app/layout/fragments/main-shell/main-shell.component';
import { COMMON_CONCEPT_ROUTES } from './routes/common-concepts.routes';
import { RXJS_ROUTES } from './routes/rxjs.routes';
import { ROUTER_CONCEPT_ROUTES } from './routes/router.routes';
import { FORM_ROUTES } from './routes/forms.routes';
import { NGRX_ROUTES } from './routes/ngrx.routes';

const angularRoutes: Routes = [
  {
    path: '',
    component: MainShellComponent,
    children: [
      ...COMMON_CONCEPT_ROUTES,
      ...RXJS_ROUTES,
      ...ROUTER_CONCEPT_ROUTES,
      ...FORM_ROUTES,
      ...NGRX_ROUTES,
    ]
  }]

@NgModule({
  imports: [RouterModule.forChild(angularRoutes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
