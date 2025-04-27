import { Component } from '@angular/core';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.scss']
})
export class StatsCardComponent {
  stats = [
    { value: '3,256', label: 'Total Patients', icon: 'fas fa-bed', iconColor: 'icon-purple' },
    { value: '394', label: 'Available Staff', icon: 'fas fa-users', iconColor: 'icon-blue' },
    { value: '$2,536', label: 'Avg Treat. Costs', icon: 'fas fa-wallet', iconColor: 'icon-orange' },
    { value: '38', label: 'Available Cars', icon: 'fas fa-ambulance', iconColor: 'icon-red' }
  ];
}
