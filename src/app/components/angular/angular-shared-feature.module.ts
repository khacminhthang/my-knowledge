import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialModule } from 'src/app/material.module';
import { FragmentsModule } from 'src/app/layout/fragments/fragments.module';
import { ShareModule } from '../share/share.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FragmentsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ShareModule,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FragmentsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ShareModule,
  ],
})
export class AngularSharedFeatureModule {}
