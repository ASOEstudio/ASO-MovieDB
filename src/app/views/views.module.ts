import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { MoviesListComponent } from './movies-list/movies-list.component';

@NgModule({
  declarations: [
    MoviesListComponent
  ],
  exports: [
    MoviesListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule
  ]
})
export class ViewsModule { }
