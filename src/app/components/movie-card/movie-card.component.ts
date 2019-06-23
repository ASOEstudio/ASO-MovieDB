import { Component, OnInit, Input } from '@angular/core';

import { DataStorageService } from 'src/app/services/data-storage.service';
import { Movie } from 'src/app/services/interfaces/movie';
import { environment } from 'src/environments/environment';

const base_url = environment.IMG_STORAGE;

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: Movie;
  poster: string;

  constructor(private dataStoreServ: DataStorageService) { }

  ngOnInit() {
    this.init()
  }
  
  init() {
    const size = this.dataStoreServ.configuration.images.poster_sizes[0];
    this.poster = base_url + size + this.movie.poster_path;
  }
}
