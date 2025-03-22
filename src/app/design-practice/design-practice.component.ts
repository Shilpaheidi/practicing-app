import { Component } from '@angular/core';

@Component({
  selector: 'app-design-practice',
  templateUrl: './design-practice.component.html',
  styleUrls: ['./design-practice.component.scss']
})
export class DesignPracticeComponent {
  cards = [
    { icon: 'fas fa-bed', value: '3,256', label: 'Total Patients', colorClass: 'purple' },
    { icon: 'fas fa-users', value: '394', label: 'Available Staff', colorClass: 'blue' },
    { icon: 'fas fa-wallet', value: '$2,536', label: 'Avg Treat. Costs', colorClass: 'orange' },
    { icon: 'fas fa-ambulance', value: '38', label: 'Available Cars', colorClass: 'pink' }
  ];
}
