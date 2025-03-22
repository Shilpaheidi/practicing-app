import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  tasks: any[] = [];
  filterStatus: string = 'all';
  constructor(private taskService: TaskService) { }
  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  
  get filteredTasks() {
    if (this.filterStatus === 'completed') {
      return this.tasks.filter(t => t.completed);
    } else if (this.filterStatus === 'pending') {
      return this.tasks.filter(t => !t.completed);
    } else {
      return this.tasks;
    }
  }
  deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId);
  }

  openEditModal(task: any) {
    // Pass task data to the edit modal (see Step 5)
  }
}
