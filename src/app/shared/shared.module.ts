import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule, MatCardModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ]
})
export class SharedModule { }
