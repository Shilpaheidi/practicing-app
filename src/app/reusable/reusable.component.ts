import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reusable',
  templateUrl: './reusable.component.html',
  styleUrls: ['./reusable.component.scss']
})
export class ReusableComponent {
  @Input() data: any[] = [];
  @Input() columns: { columnDef: string; header: string }[] = [];
  displayedColumns: string[] = [];

  ngOnChanges() {
    this.displayedColumns = this.columns.map((column) => column.columnDef);
  }
}