import { Component } from '@angular/core';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss']
})
export class ServicesSectionComponent {
  services = [
    {
      title: 'Web Development',
      description: 'Building responsive and dynamic websites using the latest technologies.',
      icon: 'web'
    },
    {
      title: 'Mobile App Development',
      description: 'Creating user-friendly mobile applications for iOS and Android platforms.',
      icon: 'mobile_friendly'
    },
    {
      title: 'UI/UX Design',
      description: 'Designing intuitive and engaging user interfaces and experiences.',
      icon: 'design_services'
    },
    {
      title: 'SEO Optimization',
      description: 'Improving website visibility and ranking on search engines.',
      icon: 'search'
    }
  ];
}
