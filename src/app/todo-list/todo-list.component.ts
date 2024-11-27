import { Component } from '@angular/core';

interface Task {
  name: string;
  category: string;
  dueDate: string;
  priority: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  newTask: Partial<Task> = {}
  tasks: Task[] = [];
  filterCategory: string = '';
  searchTerm: string = '';
  sortDirection: boolean = true;


  addTask() {
    if (this.newTask.name && this.newTask.category && this.newTask.dueDate && this.newTask.priority) {

      this.tasks.push({ ...this.newTask, completed: false } as Task);
      this.newTask = {};
    }
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(t => t !== task);
  }

  markAsCompleted(task: Task) {
    task.completed = true;
  }

  sortTasksBy(key: 'name' | 'priority') {
    this.sortDirection = !this.sortDirection;
    this.tasks.sort((a, b) => {
      const compareA = a[key].toLowerCase();
      const compareB = b[key].toLowerCase();
      return this.sortDirection ? compareA.localeCompare(compareB) :
        compareB.localeCompare(compareA);
    });
  }

  filteredTasks() {
      return this.tasks.filter(task => (!this.filterCategory || task.category === this.filterCategory) && (!this.searchTerm || task.name.toLowerCase().includes(this.searchTerm.toLowerCase())));
  }
}
