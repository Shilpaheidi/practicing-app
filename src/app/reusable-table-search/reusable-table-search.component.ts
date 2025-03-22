import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-reusable-table-search',
  templateUrl: './reusable-table-search.component.html',
  styleUrls: ['./reusable-table-search.component.scss']
})
export class ReusableTableSearchComponent {
@Input() data:any[] = [];
@Input() columns: { columnDef: string; header: string }[] = [];
searchKeyword: any = '' ; // Search keyword
selectedColumn: string = ''; // Selected column for filtering
filteredData: any[] = []; // Filtered data to display
displayedColumns: string[] = []; // Columns to display
ngOnChanges() {
  this.displayedColumns = this.columns.map((column) => column.columnDef);
  this.applyFilter(); // Apply filter when data changes
}

applyFilter() {
  this.filteredData = this.data.filter((row) => {
    // If no column is selected, search all columns
    if (!this.selectedColumn) {
      return Object.values(row).some((value) =>
        String(value).toLowerCase().includes(this.searchKeyword.toLowerCase())
      );
    }

    // Search only the selected column
    return String(row[this.selectedColumn])
      .toLowerCase()
      .includes(this.searchKeyword.toLowerCase());
  });
}

searchControl = new FormControl(''); // Reactive form control

ngOnInit() {
  this.searchControl.valueChanges
    .pipe(debounceTime(300)) // Wait for 300ms after the user stops typing
    .subscribe((value) => {
      this.searchKeyword = value;
      this.applyFilter();
    });
}
}
