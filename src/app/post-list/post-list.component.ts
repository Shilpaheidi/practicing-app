import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  postData: any[] = []; // Data for the table
  postColumns = [
    { columnDef: 'id', header: 'ID' },
    { columnDef: 'title', header: 'Title' },
    { columnDef: 'body', header: 'Body' },
  ]; // Column configuration

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Fetch data from API
    this.dataService.getPosts().subscribe((data) => {
      this.postData = data;
    });
  }
}
