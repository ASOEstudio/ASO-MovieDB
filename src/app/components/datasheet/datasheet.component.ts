import { Component, OnInit, Input } from '@angular/core';

import { DataStorageService } from 'src/app/services/data-storage.service';
import { MovieRS } from 'src/app/services/interfaces/movie-rs';

@Component({
  selector: 'app-datasheet',
  templateUrl: './datasheet.component.html',
  styleUrls: ['./datasheet.component.scss']
})
export class DatasheetComponent implements OnInit {

  @Input() backdrop: string;
  @Input() movieData: MovieRS;
  date: Date;

  constructor(private dataStoreServ: DataStorageService) { }

  ngOnInit() {
    this.init()
  }

  init() {
    if (this.movieData.release_date != '') {
      this.date = this.dataStoreServ.fixDateObject(this.movieData.release_date);
    }
  }

}
