import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule, MatCardModule, MatButtonModule, MatProgressSpinnerModule } from '@angular/material';

import { LoaderSpinnerModule } from '../components/loader-spinner/loader-spinner.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,

    LoaderSpinnerModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,

    LoaderSpinnerModule
  ]
})
export class SharedModule { }
