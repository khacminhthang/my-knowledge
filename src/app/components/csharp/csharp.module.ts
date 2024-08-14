import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FragmentsModule } from 'src/app/layout/fragments/fragments.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/material.module';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { CSharpRoutingModule } from './csharp-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { ProgramStructureComponent } from './program-structure/program-structure.component';
import { BasicSyntaxComponent } from './basic-syntax/basic-syntax.component';
import { DataTypesComponent } from './data-types/data-types.component';
import { TypeConversionComponent } from './type-conversion/type-conversion.component';
import { VariablesComponent } from './variables/variables.component';
import { ConstantsAndLiteralsComponent } from './constants-and-literals/constants-and-literals.component';
import { OperatorsComponent } from './operators/operators.component';
import { FlowControlComponent } from './flow-control/flow-control.component';
import { ShareModule } from '../share/share.module';
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

@NgModule({
  declarations: [
    OverviewComponent,
    ProgramStructureComponent,
    BasicSyntaxComponent,
    DataTypesComponent,
    TypeConversionComponent,
    VariablesComponent,
    ConstantsAndLiteralsComponent,
    OperatorsComponent,
    FlowControlComponent,
    LoopsComponent,
    EncapsulationComponent,
    MethodsComponent,
    NullablesComponent,
    ArrayComponent,
    StringsComponent,
    StructureComponent,
    EnumsComponent,
    ClassesComponent,
    InheritanceComponent,
    PolymorphismComponent,
    OperatorOverloadingComponent,
    InterfaceComponent,
    NamespacesComponent,
    PreprocessorDirectivesComponent,
    RegularExpressionsComponent,
    ExceptionHandlingComponent,
    FileIoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CSharpRoutingModule,
    FragmentsModule,
    RouterModule,
    FormsModule,
    ShareModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ]
})
export class CsharpModule { }
