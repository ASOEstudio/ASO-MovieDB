import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { ConfigurationRS } from './interfaces/configuration-rs';

const API = environment.API_ENDPOINT;
const KEY = environment.API_KEY;

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  configuration: ConfigurationRS

  constructor(private http: HttpClient) { }

  getConfig() {
    this.http.get(API + 'configuration' + '?api_key=' + KEY)
    .pipe(map( res => res as ConfigurationRS))
    .subscribe( res => this.configuration = res, err => console.log(err),
      () => this.saveLocal('TMDBConfig', this.configuration)
    );
  }

  private saveLocal(key: string, item: any) {
    localStorage.setItem(key , JSON.stringify(item));
  }
}
