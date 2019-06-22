import { Component, OnInit } from '@angular/core';

import { Movie } from 'src/app/services/interfaces/movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  movies: Movie[] = [];

  constructor() { }

  ngOnInit() { 
  }

}
