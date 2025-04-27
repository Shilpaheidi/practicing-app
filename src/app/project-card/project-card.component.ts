import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() project = {
    title: 'Enote - (leave)',
    description: 'Enote - (leave management system)',
    startDate: 'Aug 10, 2023',
    endDate: 'Sep 30, 2023',
    stage: 'Development',
    status: 'Open',
    code: 'ENote-Leave',
    budgetHours: '200:00',
    actualHours: '1826:00',
    progress: 82
  };
}
