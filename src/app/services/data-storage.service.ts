import { Injectable } from '@angular/core';
import { MoviesRS } from './interfaces/movies-rs';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  query: MoviesRS;

  constructor() { }
}
