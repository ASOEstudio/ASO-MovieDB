import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { TmdbService } from 'src/app/services/tmdb.service';
import { MoviesRS } from 'src/app/services/interfaces/movies-rs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [TmdbService]
})
export class SearchComponent implements OnInit, OnDestroy {

  @Output() result = new EventEmitter<object>();

  debounce = new Subject<string>();
  form: FormGroup;
  query: MoviesRS;

  constructor(private tmdbServ: TmdbService, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      searchField: this.fb.control('', Validators.minLength(3))
    });

    this.debounce.pipe(debounceTime(300))
      .subscribe( () => this.searchQuery());
  }

  searchQuery() {
    let search: string;

    if (this.form.get('searchField').valid && this.form.get('searchField').value != '') {
      search = this.form.get('searchField').value;

      this.tmdbServ.searchItems(search).subscribe(
        res => this.query = res,
        err => console.log(err),
        () => this.result.emit(this.query.results)
      );
    }
  }

  ngOnDestroy() {
    this.debounce.unsubscribe();
  }
}
