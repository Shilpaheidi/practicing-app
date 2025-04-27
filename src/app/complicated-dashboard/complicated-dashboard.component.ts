import { Component } from '@angular/core';

@Component({
  selector: 'app-complicated-dashboard',
  templateUrl: './complicated-dashboard.component.html',
  styleUrls: ['./complicated-dashboard.component.scss']
})
export class ComplicatedDashboardComponent {
  summaryCards = [
    { title: 'Total Sales', value: '$24,500', change: '+4.2%', icon: 'shopping_cart' },
    { title: 'Orders', value: '1,230', change: '-1.2%', icon: 'assignment' },
    { title: 'Customers', value: '5,840', change: '+0.4%', icon: 'group' },
    { title: 'Revenue', value: '$92,470', change: '+6.5%', icon: 'attach_money' }
  ];

  latestOrders = [
    { name: 'Michael O.', date: 'Mar 20', id: '#12347', status: 'Approved' },
    { name: 'Sarah W.', date: 'Mar 19', id: '#12348', status: 'Pending' },
    { name: 'James D.', date: 'Mar 13', id: '#12345', status: 'Approved' },
    { name: 'Emily R.', date: 'Mar 16', id: '#12344', status: 'Declined' },
    { name: 'David P.', date: 'Mar 17', id: '#12343', status: 'Approved' }
  ];

  taskList = [
    { task: 'Update website', done: true },
    { task: 'Review sales report', done: true },
    { task: 'Reply to messages', done: false },
    { task: 'Add new products', done: false },
    { task: 'Schedule meeting', done: false }
  ];

  orderOverview = [
    { id: '#12347', customer: 'Jacob W.', date: 'Mar 20', amount: '99.00 USD', status: 'Approved' },
    { id: '#12346', customer: 'Olivia P.', date: 'Mar 16', amount: '149.00 USD', status: 'Pending' },
    { id: '#12345', customer: 'Ethan S.', date: 'Mar 18', amount: '99.00 USD', status: 'Approved' },
    { id: '#12344', customer: 'Sophia K.', date: 'Mar 18', amount: '210.00 USD', status: 'Declined' },
    { id: '#12343', customer: 'Michael B.', date: 'Mar 16', amount: '120.00 USD', status: 'Approved' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
