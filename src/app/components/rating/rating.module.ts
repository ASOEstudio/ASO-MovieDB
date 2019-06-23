import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressSpinnerModule } from '@angular/material';

import { RatingComponent } from './rating.component';

@NgModule({
  declarations: [
    RatingComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    RatingComponent
  ]
})
export class RatingModule { }
