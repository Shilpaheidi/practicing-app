import { Component } from '@angular/core';
import { debounce, debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent {
  items: string[] = [
    'Apple',
    'Banana',
    'Orange',
    'Grape',
    'Watermelon',
    'Pineapple',
    'Mango',
    'Peach',
    'Strawberry',
    'Blueberry',
  ];
  filteredItems: string[] = this.items;
  searchQuery: string = '';
  private searchSubject:Subject<string> = new Subject();
  constructor() {
    this.searchSubject.pipe(debounceTime(500)).subscribe((query:string)=>{
      this.filterItems(query)
    })
  }
  onSearch(): void {
    this.searchSubject.next(this.searchQuery);

    console.log('checking when it is calling');
    
  }



  filterItems(query:string):void{
    if (query) {
      this.filteredItems = this.items.filter(item=>
        item.toLowerCase().includes(query.toLowerCase())
      )
    }else{
      this.filteredItems = this.items;
    }
  }
}
