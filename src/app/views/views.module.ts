import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsRoutingModule } from './views-routing.module';

import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@NgModule({
  declarations: [
    MoviesListComponent,
    MovieDetailsComponent
  ],
  exports: [
    MoviesListComponent,
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule,
    ComponentsModule
  ]
})
export class ViewsModule { }
