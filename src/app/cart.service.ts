import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItems.asObservable();
  constructor() { }
  addToCart(product: any) {
    const currentCart = this.cartItems.value;
    this.cartItems.next([...currentCart, product]);
  }

  removeFromCart(index: number) {
    const currentCart = this.cartItems.value;
    currentCart.splice(index, 1);
    this.cartItems.next([...currentCart]);

  }
}
