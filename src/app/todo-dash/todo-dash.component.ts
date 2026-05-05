import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-dash',
  templateUrl: './todo-dash.component.html',
  styleUrls: ['./todo-dash.component.scss']
})
export class TodoDashComponent {
  tasks = ['Buy groceries', 'Read a book'];
}
