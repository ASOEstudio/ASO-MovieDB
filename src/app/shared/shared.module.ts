import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MatInputModule,
    MatButtonModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    
    MatInputModule,
    MatButtonModule
  ]
})
export class SharedModule { }
