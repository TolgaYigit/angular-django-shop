import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {switchMap, tap} from 'rxjs/operators';
import {Cart} from 'src/app/interfaces/cart';
import {Product} from 'src/app/interfaces/product';
import {CartService} from 'src/app/services/cart.service';
import {ProductService} from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, AfterViewInit {
  refresh$ = new Subject();

  products: Product[];
  cartItems: Cart;

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit() {
    this.refresh$
      .pipe(
        switchMap(() => this.productService.getAll()),
        tap(products => (this.products = products)),
        switchMap(() => this.cartService.status)
      )
      .subscribe(cartItems => {
        this.cartItems = cartItems;
      });

    this.refresh$.next();
  }

  ngAfterViewInit() {}

  addToCart(product: Product) {
    this.cartService.addToCart(product, 1);
  }
}
