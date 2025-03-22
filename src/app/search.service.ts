import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private mockData = [
    'Angular',
    'React',
    'Vue',
    'Svelte',
    'Ember',
    'Backbone',
    'Next.js',
    'Nuxt.js',
  ];
  constructor() { }

  search(term: string): Observable<string[]> {
    if (!term.trim()) {
      return of([]); // Return an empty array if no search term
    }

    const filteredData = this.mockData.filter((item)=>{
        item.toLowerCase().includes(term.toLowerCase())
    })

    return of(filteredData);
  }
}
