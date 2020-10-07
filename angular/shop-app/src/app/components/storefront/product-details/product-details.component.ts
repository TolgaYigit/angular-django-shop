import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap, tap} from 'rxjs/operators';
import {Product} from 'src/app/interfaces/product';
import {CartService} from 'src/app/services/cart.service';
import {ProductService} from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  product: Product;
  cartQuantity: number;

  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        switchMap(param => {
          return this.productService.getById(param.id);
        }),
        tap(product => {
          this.product = product;
        }),
        switchMap(() => this.cartService.status),
        map(cartItems => {
          return cartItems[this.product.id];
        })
      )
      .subscribe(cartQuantity => {
        this.cartQuantity = cartQuantity;
      });
  }

  addToCart() {
    this.cartService.addToCart(this.product, 1);
  }
}
