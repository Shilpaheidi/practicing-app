import { Component } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {
  searchTerm: string = '';
  itemsPerPage: number = 10;
  currentPage: number = 1;

  companies = [
    { code: 'CA145', name: 'XYZ Company Name', branch: 'Hosur', status: 'Active' },
    { code: 'CA145', name: 'XYZ Company Name', branch: 'Hosur', status: 'Inactive' },
    { code: 'CA145', name: 'XYZ Company Name', branch: 'Hosur', status: 'Active' },
    { code: 'CA145', name: 'XYZ Company Name', branch: 'Hosur', status: 'Active' },
    { code: 'CA145', name: 'XYZ Company Name', branch: 'Hosur', status: 'Inactive' },
    { code: 'CA145', name: 'XYZ Company Name', branch: 'Hosur', status: 'Active' },
    { code: 'CA145', name: 'XYZ Company Name', branch: 'Hosur', status: 'Inactive' }
  ];

  // Filter function for search
  filteredData() {
    return this.companies.filter(company =>
      company.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      company.code.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      company.branch.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      company.status.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Get total number of pages
  totalPages() {
    return Math.ceil(this.filteredData().length / this.itemsPerPage);
  }

  // Generate pagination numbers
  totalPagesArray() {
    return Array(this.totalPages()).fill(0).map((_, i) => i + 1);
  }
}
