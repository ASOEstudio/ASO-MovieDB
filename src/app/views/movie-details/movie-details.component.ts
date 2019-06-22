import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TmdbService } from 'src/app/services/tmdb.service';
import { MovieRS } from 'src/app/services/interfaces/movie-rs';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movieDetails: MovieRS;

  constructor(private aRoute: ActivatedRoute, private tmdbServ: TmdbService, private router: Router) { }

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
        res => this.movieDetails = res,
        err => console.log(err)
      )
    }

  }
}
