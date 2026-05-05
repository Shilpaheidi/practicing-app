import { Component } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {
  employees = [
    { name: 'John Doe', jobTitle: 'Frontend Developer', department: 'Engineering' },
    { name: 'Jane Smith', jobTitle: 'Backend Developer', department: 'Engineering' },
    { name: 'Sara Lee', jobTitle: 'Project Manager', department: 'Marketing' },
    { name: 'Mike Johnson', jobTitle: 'UI/UX Designer', department: 'Design' },
    { name: 'John Doe', jobTitle: 'Frontend Developer', department: 'Engineering' },
    { name: 'Jane Smith', jobTitle: 'Backend Developer', department: 'Engineering' },
    { name: 'Sara Lee', jobTitle: 'Project Manager', department: 'Marketing' },
    { name: 'Mike Johnson', jobTitle: 'UI/UX Designer', department: 'Design' },
    { name: 'John Doe', jobTitle: 'Frontend Developer', department: 'Engineering' },
    { name: 'Jane Smith', jobTitle: 'Backend Developer', department: 'Engineering' },
    { name: 'Sara Lee', jobTitle: 'Project Manager', department: 'Marketing' },
    { name: 'Mike Johnson', jobTitle: 'UI/UX Designer', department: 'Design' },
    // more data here
  ];
  Math = Math;
  filteredEmployees = [...this.employees];
  sortDirection: string = 'asc';
  currentPage: number = 1;
  rowsPerPage: number = 5;
  constructor() { }
  ngOnInit(): void {}
  sortTable(column: keyof typeof this.employees[0]): void {
    const direction = this.sortDirection === 'asc' ? 1 : -1;
    this.filteredEmployees.sort((a, b) => {
      if (a[column] < b[column]) return -1 * direction;
      if (a[column] > b[column]) return 1 * direction;
      return 0;
    });
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  }

  searchTable(event: Event): void {
    const query = event.target as HTMLInputElement;
    this.filteredEmployees = this.employees.filter(employee => 
      employee.name.toLowerCase().includes(query.value.toLowerCase()) ||
      employee.jobTitle.toLowerCase().includes(query.value.toLowerCase()) ||
      employee.department.toLowerCase().includes(query.value.toLowerCase())
    );
  }

  paginateData(): any[] {
    const startIndex = (this.currentPage - 1) * this.rowsPerPage;
    const endIndex = startIndex + this.rowsPerPage;
    return this.filteredEmployees.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    this.currentPage = page;
  }
}
