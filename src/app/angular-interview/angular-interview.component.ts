import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-angular-interview',
  templateUrl: './angular-interview.component.html',
  styleUrls: ['./angular-interview.component.scss']
})
export class AngularInterviewComponent {
  users: any[] = [];
  myForm!: FormGroup;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
    this.getAllUsers()
  }

  loadUsers() {
    this.userService.getUsers()
      .subscribe({
        next: (res: any[]) => {
          console.log('respose..:', res);
          this.users = res;
        },
        error: (err: any) => {
          console.error('Error:', err);
        }
      });
  }


  getAllUsers() {
    this.userService.getUsers().subscribe({

      next: (res: any) => {
        console.log('getAllUsers', res);
      }, error: (err: any) => {

      }
    })
  }
}
