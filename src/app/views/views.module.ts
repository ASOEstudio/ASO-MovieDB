import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsRoutingModule } from './views-routing.module';

import { SharedModule } from '../shared/shared.module';

import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieCardModule } from '../components/movie-card/movie-card.module';

@NgModule({
  declarations: [
    MoviesListComponent,
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule,
    MovieCardModule,
  ]
})
export class ViewsModule { }
