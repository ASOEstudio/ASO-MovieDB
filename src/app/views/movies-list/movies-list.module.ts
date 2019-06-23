import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MovieCardModule } from 'src/app/components/movie-card/movie-card.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { MoviesListComponent } from './movies-list.component';

@NgModule({
  declarations: [
    MoviesListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    
    SharedModule,
    MovieCardModule
  ]
})
export class MoviesListModule { }
