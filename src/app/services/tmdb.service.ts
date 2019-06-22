import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { MoviesRS } from './interfaces/movies-rs';

const API = environment.API_ENDPOINT;
const KEY = environment.API_KEY;

@Injectable()
export class TmdbService {
  
  constructor(private http: HttpClient) { }

  searchItems(query: string, page: number = 1, type: string = 'movie') {
    const lang = 'language=pt-BR';
    const adult = 'include_adult=true';
    const search = 'query=' + query;
    const pageIndex = 'page=' + page;

    return this.http.get(API + 'search/' + type + '?api_key=' + KEY +
      '&' + lang + '&' + adult + '&' + search + '&' + pageIndex)
      .pipe(map( res => res as MoviesRS ));
  }
}
