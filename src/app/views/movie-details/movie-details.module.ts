import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RatingModule } from 'src/app/components/rating/rating.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { MovieDetailsComponent } from './movie-details.component';
import { DatasheetModule } from 'src/app/components/datasheet/datasheet.module';

@NgModule({
  declarations: [
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,

    SharedModule,
    RatingModule,
    DatasheetModule
  ]
})
export class MovieDetailsModule { }
