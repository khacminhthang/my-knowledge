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
import { OperatorsComponent } from './operators/operators.component';
import { FlowControlComponent } from './flow-control/flow-control.component';
import { LoopsComponent } from './loops/loops.component';
import { EncapsulationComponent } from './encapsulation/encapsulation.component';
import { MethodsComponent } from './methods/methods.component';
import { NullablesComponent } from './nullables/nullables.component';
import { ArrayComponent } from './array/array.component';
import { StringsComponent } from './strings/strings.component';
import { StructureComponent } from './structure/structure.component';
import { EnumsComponent } from './enums/enums.component';
import { ClassesComponent } from './classes/classes.component';
import { InheritanceComponent } from './inheritance/inheritance.component';
import { PolymorphismComponent } from './polymorphism/polymorphism.component';
import { OperatorOverloadingComponent } from './operator-overloading/operator-overloading.component';
import { InterfaceComponent } from './interface/interface.component';
import { NamespacesComponent } from './namespaces/namespaces.component';
import { PreprocessorDirectivesComponent } from './preprocessor-directives/preprocessor-directives.component';
import { RegularExpressionsComponent } from './regular-expressions/regular-expressions.component';
import { ExceptionHandlingComponent } from './exception-handling/exception-handling.component';
import { FileIoComponent } from './file-io/file-io.component';

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
      {
        path: 'operators',
        component: OperatorsComponent
      },
      {
        path: 'flow-control',
        component: FlowControlComponent
      },
      {
        path: 'loops',
        component: LoopsComponent
      },
      {
        path: 'encapsulation',
        component: EncapsulationComponent
      },
      {
        path: 'methods',
        component: MethodsComponent
      },
      {
        path: 'nullables',
        component: NullablesComponent
      },
      {
        path: 'array',
        component: ArrayComponent
      },
      {
        path: 'strings',
        component: StringsComponent
      },
      {
        path: 'structure',
        component: StructureComponent
      },
      {
        path: 'enums',
        component: EnumsComponent
      },
      {
        path: 'classes',
        component: ClassesComponent
      },
      {
        path: 'inheritance',
        component: InheritanceComponent
      },
      {
        path: 'polymorphism',
        component: PolymorphismComponent
      },
      {
        path: 'operator-overloading',
        component: OperatorOverloadingComponent
      },
      {
        path: 'interface',
        component: InterfaceComponent
      },
      {
        path: 'namespaces',
        component: NamespacesComponent
      },
      {
        path: 'preprocessor-directives',
        component: PreprocessorDirectivesComponent
      },
      {
        path: 'regular-expressions',
        component: RegularExpressionsComponent
      },
      {
        path: 'exception-handling',
        component: ExceptionHandlingComponent
      },
      {
        path: 'file-io',
        component: FileIoComponent
      },
    ]
  }]

@NgModule({
  imports: [RouterModule.forChild(csharpRoutes)],
  exports: [RouterModule]
})
export class CSharpRoutingModule { }
