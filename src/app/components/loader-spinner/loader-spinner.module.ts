import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderSpinnerComponent } from './loader-spinner.component';
import { MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [
    LoaderSpinnerComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    LoaderSpinnerComponent
  ]
})
export class LoaderSpinnerModule { }
