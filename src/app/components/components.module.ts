import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from 'src/app/shared/shared.module';

import { MatAutocompleteModule } from '@angular/material';

import { TmdbService } from 'src/app/services/tmdb.service';

import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    SearchComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,

    MatAutocompleteModule
  ],
  exports : [
    SearchComponent
  ],
  providers: [
    TmdbService
  ]
})
export class ComponentsModule { }
