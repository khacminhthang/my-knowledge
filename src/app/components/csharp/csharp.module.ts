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
import { StructuresComponent } from './structures/structures.component';
import { TypeConversionComponent } from './type-conversion/type-conversion.component';
import { VariablesComponent } from './variables/variables.component';
import { ConstantsAndLiteralsComponent } from './constants-and-literals/constants-and-literals.component';

@NgModule({
  declarations: [
    OverviewComponent,
    ProgramStructureComponent,
    BasicSyntaxComponent,
    DataTypesComponent,
    StructuresComponent,
    TypeConversionComponent,
    VariablesComponent,
    ConstantsAndLiteralsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CSharpRoutingModule,
    FragmentsModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ]
})
export class CsharpModule { }
