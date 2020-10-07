import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Cart} from '../interfaces/cart';
import {Product} from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() {}

  status = new BehaviorSubject<Cart>(this.getCart());

  addToCart(product: Product, quantity: number) {
    if (this.checkStock(product, quantity)) {
      const cart = this.getCart();
      if (cart[product.id]) {
        cart[product.id] += quantity;
      } else {
        cart[product.id] = quantity;
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      this.status.next(cart);
    }
  }

  removeFromCart(product: Product, quantity: number) {
    const cart = this.getCart();
    if (cart[product.id]) {
      cart[product.id] -= quantity;
      if (cart[product.id] === 0) {
        delete cart[product.id];
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      this.status.next(cart);
    }
  }

  getCart() {
    return JSON.parse(localStorage.getItem('cart') || '{}') as Cart;
  }

  private checkStock(product: Product, quantity): boolean {
    if (product.stock < 1) {
      return false;
    }

    const cart = this.getCart();

    if (cart[product.id]) {
      return cart[product.id] + quantity <= product.stock;
    } else {
      return true;
    }
  }
}
