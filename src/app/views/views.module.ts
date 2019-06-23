import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsRoutingModule } from './views-routing.module';

import { MovieDetailsModule } from './movie-details/movie-details.module';
import { MoviesListModule } from './movies-list/movies-list.module';

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    
    MovieDetailsModule,
    MoviesListModule
  ]
})
export class ViewsModule { }
