import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  userData: any[] = []; // Data for the table
  userColumns = [
    { columnDef: 'id', header: 'ID' },
    { columnDef: 'name', header: 'Name' },
    { columnDef: 'email', header: 'Email' },
  ]; // Column configuration
  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Fetch data from API
    this.dataService.getUsers().subscribe((data: any[]) => {
      console.log('API Response:', data);
      this.userData = data;
    });
  }
}
