import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent {
  users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Sam Wilson', email: 'sam@example.com', role: 'Manager' }
  ];

  filteredData = [...this.users];
  displayedColumns: string[] = ['id', 'name', 'email', 'role', 'actions'];
  userForm!: FormGroup;
  searchText = '';

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  // onAddUser() {
  //   if (this.userForm.valid) {
  //     const newUser = {
  //       id: this.users.length + 1,
  //       ...this.userForm.value
  //     }
  //     this.users.push(newUser);
  //     this.userForm.reset();
  //   };
  // }

  onAddUser() {
    if (this.userForm.valid) {
      const newUser = {
        id: this.users.length + 1,
        ...this.userForm.value
      };
      this.users.push(newUser);
      this.applyFilter();
      this.userForm.reset();
    }
  }

  onDeleteUser(id: number) {

    this.users = this.users.filter((user) => user.id != id);
    this.applyFilter();
  }

  applyFilter() {
    this.filteredData = this.users.filter(user => {
      const search = this.searchText.toLowerCase();

      return (

        user.name.toLowerCase().includes(search) ||
        user.email.toLowerCase().includes(search) ||
        user.role.toLowerCase().includes(search)
      );


    })
  }

  sortData(column: string) {
    this.filteredData.sort((a: any, b: any) => (a[column] > b[column] ? 1 : -1));
  }

  onPaginateChange(event: any) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex =  startIndex + event.pageSize;

    this.filteredData = this.users.slice(startIndex,endIndex);

  }
}
