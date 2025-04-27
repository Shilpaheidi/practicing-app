import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent {
  messages = [
    { name: 'Visual Idiot', avatar: 'assets/user1.jpg', status: 'green' },
    { name: 'Charlie Waite', avatar: 'assets/user2.jpg', status: 'green' },
    { name: 'Kerem Suer', avatar: 'assets/user3.jpg', status: 'orange' },
    { name: 'Victor Ertxon', avatar: 'assets/user4.jpg', status: 'green' },
    { name: 'Daryl Ginn', avatar: 'assets/user5.jpg', status: 'blue' },
    { name: 'Eric Hoffman', avatar: 'assets/user6.jpg', status: 'gray' },
  ];
}
