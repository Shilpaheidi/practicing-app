import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-complex-dashboard',
  templateUrl: './complex-dashboard.component.html',
  styleUrls: ['./complex-dashboard.component.scss']
})
export class ComplexDashboardComponent {
  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
}
