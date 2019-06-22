import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from 'src/app/shared/shared.module';

import { MatAutocompleteModule } from '@angular/material';

import { TmdbService } from 'src/app/services/tmdb.service';

import { SearchComponent } from './search/search.component';
import { MovieCardComponent } from './movie-card/movie-card.component';

@NgModule({
  declarations: [
    SearchComponent,
    MovieCardComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  exports : [
    SearchComponent,
    MovieCardComponent
  ],
  providers: [
    TmdbService
  ]
})
export class ComponentsModule { }
