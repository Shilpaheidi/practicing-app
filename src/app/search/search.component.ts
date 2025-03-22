import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from '../search.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchControl = new FormControl();
  results: string[] = [];
  loading = false;
  constructor(private searchService: SearchService) {
    this.searchControl.valueChanges.pipe(debounceTime(300), distinctUntilChanged(), switchMap((term) => {
      this.loading = true;
      return this.searchService.search(term);
    })).subscribe((results) => {
      this.loading = false;
      this.results = results;
    });
  }
}
