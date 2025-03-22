import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
tasks:{name:string,completed:boolean}[]=[];
newTask:string='';


addTask(){
  if (this.newTask.trim()) {
    this.tasks.push({name:this.newTask,completed:false});
    this.newTask = '';
  }
}

toggleTask(index:number){
  this.tasks[index].completed = !this.tasks[index].completed;
}


deleteTask(index:number){
this.tasks.splice(index,1);
}
}
