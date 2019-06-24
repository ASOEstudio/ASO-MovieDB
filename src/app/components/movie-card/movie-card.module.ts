import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { RatingModule } from '../rating/rating.module';

import { MovieCardComponent } from './movie-card.component';
import { MatProgressBarModule } from '@angular/material';

@NgModule({
  declarations: [
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    
    MatProgressBarModule,

    SharedModule,
    RatingModule
  ],
  exports: [
    MovieCardComponent
  ]
})
export class MovieCardModule { }
