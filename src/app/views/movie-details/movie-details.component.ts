import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { environment } from 'src/environments/environment';
import { TmdbService } from 'src/app/services/tmdb.service';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { MovieRS } from 'src/app/services/interfaces/movie-rs';

const base_url = environment.IMG_STORAGE;

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie: MovieRS;
  backdrop: string;
  poster: string;

  constructor(
    private aRoute: ActivatedRoute,
    private router: Router,
    private tmdbServ: TmdbService,
    private dataStoreServ: DataStorageService,
    ) { }

  ngOnInit() {
    this.aRoute.params.subscribe(params =>
      this.getMovieDetails(params)
    )
  }
  
  private getMovieDetails(params) {
    const movieId: string = params['movieId'];

    if (movieId.match(/[a-z-A-Z/_\s]/)) {
      this.router.navigate(['']);
    } else {
      this.tmdbServ.getItem(movieId).subscribe(
        res => this.movie = res,
        err => console.log(err),
        () => this.getImages()
      )
    }
  }

  private getImages() {
    const backdropSize = this.dataStoreServ.configuration.images.backdrop_sizes[2];
    const posterSize = this.dataStoreServ.configuration.images.poster_sizes[3];

    this.poster = base_url + posterSize + this.movie.poster_path;
    this.backdrop = "url('" + base_url + backdropSize + this.movie.backdrop_path + "')";
  }

  fixDateObject(date) {
    const parts: number = date.split(/-|T|Z/);
    let dateObj = new Date(parts[0], parts[1] - 1, parts[2]);
    return dateObj;
  }

}
