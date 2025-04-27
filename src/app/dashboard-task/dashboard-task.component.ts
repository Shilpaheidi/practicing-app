import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-task',
  templateUrl: './dashboard-task.component.html',
  styleUrls: ['./dashboard-task.component.scss']
})
export class DashboardTaskComponent {
  cards = [
    { title: 'User Count', count: 100 },
    { title: 'Sales', count: 500 },
    { title: 'Orders', count: 200 }
  ];

  onCardClick(title: string): void {
    alert(`${title} card clicked!`);
  }
}
