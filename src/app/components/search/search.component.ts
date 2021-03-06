import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { TmdbService } from 'src/app/services/tmdb.service';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { MoviesRS } from 'src/app/services/interfaces/movies-rs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  debounce = new Subject<string>();
  form: FormGroup;
  query: MoviesRS;

  constructor(
    private tmdbServ: TmdbService, 
    private dataStoreServ: DataStorageService, 
    private fb: FormBuilder,
    private router: Router
    ) { }

  ngOnInit() {
    this.form = this.fb.group({
      searchField: this.fb.control('', Validators.minLength(3))
    });

    this.debounce.pipe(debounceTime(500))
      .subscribe( () => this.searchQuery());
  }

  searchQuery(clear = false) {
    let search: string;

    if (this.form.get('searchField').valid && this.form.get('searchField').value != '') {
      search = this.form.get('searchField').value;
      
      if (clear) {
        this.tmdbServ.queryTerm = '';
        this.dataStoreServ.setMoviesQuery(clear);
      } else {
        this.tmdbServ.queryTerm = search;

        this.tmdbServ.searchItems().subscribe(
          res => this.query = res,
          err => console.log(err),
          () => {
            this.dataStoreServ.setMoviesQuery(this.query);
          }
        );
      }
    }
  }

  redirect() {
    this.router.navigate(['/']);
  }

  ngOnDestroy() {
    this.debounce.unsubscribe();
  }
}
