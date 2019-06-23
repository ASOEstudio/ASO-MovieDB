import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { SearchModule } from '../search/search.module';

import { MatToolbarModule } from '@angular/material';

import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    SharedModule,
    SearchModule,
    
    MatToolbarModule
  ]
})
export class HeaderModule { }
