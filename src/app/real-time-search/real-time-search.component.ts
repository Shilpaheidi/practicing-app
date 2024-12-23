import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, debounceTime, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-real-time-search',
  templateUrl: './real-time-search.component.html',
  styleUrls: ['./real-time-search.component.scss']
})
export class RealTimeSearchComponent {
  searchText: string = '';
  users: any[] = [];
  loading: boolean = false;
  noResults: boolean = false;
  errorMessage: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  onSearchChange() {
    if (this.searchText.length >= 3) {
      this.loading = true;
      this.noResults = false;
      this.errorMessage = '';


      this.http.get(`https://jsonplaceholder.typicode.com/users?q=${this.searchText}`).pipe(debounceTime(500), switchMap(() => this.http.get(`https://jsonplaceholder.typicode.com/users?q=${this.searchText}`)), catchError(err => {
        this.errorMessage = 'An error occurred while fetching data.';
        this.loading = false;
        return of([]);
      })).subscribe((data: any) => {

        this.users = data;
        this.loading = false;
        this.noResults = this.users.length === 0;
      });
    } else {
      this.users = [];
    }

  }

  clearSearch() {
    this.searchText = '';
    this.users = [];
    this.noResults = false;
    this.errorMessage = '';
  }
}
