import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: any[] = [
    { id: 1, title: 'Learn Angular', description: 'Complete Angular basics', completed: false },
    { id: 2, title: 'Build a Project', description: 'Create a task management app', completed: true }
  ];
  getTasks() {
    return this.tasks;
  }

  addTask(task: any) {
    this.tasks.push({ ...task, id: this.tasks.length + 1, completed: false });
  }

  updateTask(updatedTask: any) {
    const index = this.tasks.findIndex(t => t.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
    }
  }

  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter(t => t.id !== taskId);
  }
  constructor() { }
}
