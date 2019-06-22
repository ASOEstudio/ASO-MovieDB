import { Component } from '@angular/core';

import { DataStorageService } from './services/data-storage.service';
import { ConfigurationRS } from './services/interfaces/configuration-rs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(dataStoreServ: DataStorageService) {
    if (localStorage.getItem('TMDBConfig')) {
      dataStoreServ.configuration = <ConfigurationRS>JSON.parse(
        localStorage.getItem('TMDBConfig'));
    } else {
      dataStoreServ.getConfig()
    }
  }
}
