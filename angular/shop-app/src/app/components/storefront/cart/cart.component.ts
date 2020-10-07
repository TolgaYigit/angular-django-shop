import {Component, OnDestroy, OnInit} from '@angular/core';
import {of, Subject} from 'rxjs';
import {distinctUntilChanged, map, switchMap, takeUntil, tap} from 'rxjs/operators';
import {Cart} from 'src/app/interfaces/cart';
import {Product} from 'src/app/interfaces/product';
import {CartService} from 'src/app/services/cart.service';
import {ProductService} from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  constructor(private cartService: CartService, private productService: ProductService) {}

  cartItems: Cart = {};
  cartProducts: Product[];

  private onDestroy$ = new Subject<void>();

  ngOnInit(): void {
    this.cartService.status
      .pipe(
        tap(cartItems => (this.cartItems = cartItems)),
        map(cartItems => {
          return Object.keys(cartItems);
        }),
        distinctUntilChanged((prev, next) => {
          return JSON.stringify(prev) === JSON.stringify(next);
        }),
        switchMap(itemIds => {
          if (itemIds.length) {
            return this.productService.getAll(itemIds);
          } else {
            return of([]);
          }
        }),
        takeUntil(this.onDestroy$)
      )
      .subscribe(cartProducts => {
        this.cartProducts = cartProducts;
      });
  }

  ngOnDestroy() {
    this.onDestroy$.next();
  }

  increaseQuantity(product: Product) {
    this.cartService.addToCart(product, 1);
  }
  decreaseQuantity(product: Product) {
    this.cartService.removeFromCart(product, 1);
  }
}
