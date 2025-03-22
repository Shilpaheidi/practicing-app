import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products = [
    { name: 'Laptop', price: 1200 },
    { name: 'Smartphone', price: 800 },
    { name: 'Headphones', price: 100 },
  ];
  constructor(private cartService: CartService) {}
  addToCart(product: any) {
    this.cartService.addToCart(product); // Add product to cart
  }
}
