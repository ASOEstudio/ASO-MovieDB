import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { MoviesRS } from './interfaces/movies-rs';
import { MovieRS } from './interfaces/movie-rs';

const API = environment.API_ENDPOINT;
const KEY = environment.API_KEY;

@Injectable()
export class TmdbService {

  lang = 'language=pt-BR';
  adult = 'include_adult=true';
  
  constructor(private http: HttpClient) { }

  searchItems(query: string, page: number = 1, type: string = 'movie') {
    const search = 'query=' + query;
    const pageIndex = 'page=' + page;

    return this.http.get(API + 'search/' + type + '?api_key=' + KEY +
      '&' + this.lang + '&' + this.adult + '&' + search + '&' + pageIndex)
      .pipe(map( res => res as MoviesRS ));
  }

  getItem(query: string, type: string = 'movie') {
    return this.http.get(API + type + '/' + query +
      '?api_key=' + KEY + '&' + this.lang)
      .pipe(map( res => res as MovieRS))
  }
}
