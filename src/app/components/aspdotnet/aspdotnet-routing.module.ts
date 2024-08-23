import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainShellComponent } from 'src/app/layout/fragments/main-shell/main-shell.component';
import { RepositoryComponent } from './repository/repository.component';
import { UnitOfWorkComponent } from './unit-of-work/unit-of-work.component';
import { CqrsPatternComponent } from './cqrs-pattern/cqrs-pattern.component';
import { CleanArchitectureComponent } from './clean-architecture/clean-architecture.component';

const aspdotnetRoutes: Routes = [
  {
    path: '',
    component: MainShellComponent,
    children: [
      {
        path: 'unit-of-work',
        component: UnitOfWorkComponent
      },
      {
        path: 'repository',
        component: RepositoryComponent
      },
      {
        path: 'cqrs-pattern',
        component: CqrsPatternComponent
      },
      {
        path: 'clean-architecture',
        component: CleanArchitectureComponent
      },
    ]
  }]

@NgModule({
  imports: [RouterModule.forChild(aspdotnetRoutes)],
  exports: [RouterModule]
})
export class AspDotNetRoutingModule { }
