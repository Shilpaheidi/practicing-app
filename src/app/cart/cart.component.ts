import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}
  ngOnInit() {
    this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items; // Subscribe to cart updates
    });

  }

  removeFromCart(index: number) {
    this.cartService.removeFromCart(index); // Remove item from cart
  }
  calculateTotal() {
    return this.cartItems.reduce((total,items)=> total + items.price,0);
  }
}
