import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TmdbService } from 'src/app/services/tmdb.service';

import { SharedModule } from 'src/app/shared/shared.module';

import { SearchComponent } from './search.component';

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [
    SearchComponent
  ],
  providers: []
})
export class SearchModule { }
