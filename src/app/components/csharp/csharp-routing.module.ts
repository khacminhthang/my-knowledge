import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainShellComponent } from 'src/app/layout/fragments/main-shell/main-shell.component';
import { BasicSyntaxComponent } from './basic-syntax/basic-syntax.component';
import { DataTypesComponent } from './data-types/data-types.component';
import { OverviewComponent } from './overview/overview.component';
import { ProgramStructureComponent } from './program-structure/program-structure.component';
import { TypeConversionComponent } from './type-conversion/type-conversion.component';
import { VariablesComponent } from './variables/variables.component';
import { ConstantsAndLiteralsComponent } from './constants-and-literals/constants-and-literals.component';

const csharpRoutes: Routes = [
  {
    path: '',
    component: MainShellComponent,
    children: [
      {
        path: 'overview',
        component: OverviewComponent
      },
      {
        path: 'program-structure',
        component: ProgramStructureComponent
      },
      {
        path: 'basic-syntax',
        component: BasicSyntaxComponent
      },
      {
        path: 'data-types',
        component: DataTypesComponent
      },
      {
        path: 'type-conversion',
        component: TypeConversionComponent
      },
      {
        path: 'variables',
        component: VariablesComponent
      },
      {
        path: 'constants-and-literals',
        component: ConstantsAndLiteralsComponent
      },
    ]
  }]

@NgModule({
  imports: [RouterModule.forChild(csharpRoutes)],
  exports: [RouterModule]
})
export class CSharpRoutingModule { }
