import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { ConfigurationRS } from './interfaces/configuration-rs';
import { MoviesRS } from './interfaces/movies-rs';
import { Observable, Subject } from 'rxjs';

const API = environment.API_ENDPOINT;
const KEY = environment.API_KEY;

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  configuration: ConfigurationRS;
  subject: Subject<MoviesRS>;
  moviesQuery$: Observable<MoviesRS>;

  constructor(private http: HttpClient) {
    this.subject = new Subject<MoviesRS>();
    this.moviesQuery$ = this.subject.asObservable();
  }

  getConfig() {
    this.http.get(API + 'configuration' + '?api_key=' + KEY)
    .pipe(map( res => res as ConfigurationRS))
    .subscribe( res => this.configuration = res, err => console.log(err),
      () => this.saveLocal('TMDBConfig', this.configuration)
    );
  }

  setMoviesQuery(data) {
    this.subject.next(data);
  }

  private saveLocal(key: string, item: any) {
    localStorage.setItem(key, JSON.stringify(item));
  }

}
