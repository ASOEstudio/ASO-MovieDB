import { Component, OnInit, OnDestroy } from '@angular/core';

import { DataStorageService } from 'src/app/services/data-storage.service';
import { TmdbService } from 'src/app/services/tmdb.service';
import { Movie } from 'src/app/services/interfaces/movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  movies: Movie[] = [];
  pages = 0;
  currentPage = 1;
  pageInitial = true;

  constructor(private dataStoreServ: DataStorageService, private tmdbServ: TmdbService) { }
  
  ngOnInit() {
    this.dataStoreServ.moviesQuery$.subscribe(data => {
      this.movies = data.results;
      this.pages = data.total_pages;
      this.pageInitial = false;
    });

    this.dataStoreServ.clear$.subscribe(res => {
      this.movies.length = 0;
      this.pages = 0;
      this.pageInitial = true;
    })

    if (this.tmdbServ.queryTerm != '') {
      this.getPage(); 
    }
  }

  getPage(mode: string = undefined) {
    let pageNum = this.currentPage;
    if (mode == 'next') {
      pageNum = this.currentPage + 1;
    }
    this.tmdbServ.searchItems({ page: pageNum }).subscribe(
      res => {
        res.results.forEach(movie => this.movies.push(movie));
        this.pages = res.total_pages;
      }
    )
  }

}
