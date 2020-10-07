import {Component, OnInit} from '@angular/core';
import {switchMap} from 'rxjs/operators';
import {CartService} from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.css']
})
export class CartIconComponent implements OnInit {
  constructor(private cartService: CartService) {}

  totalItem = 0;

  ngOnInit(): void {
    this.cartService.status.subscribe(cart => {
      this.totalItem = Object.values(cart).length ? Object.values(cart).reduce((a, b) => a + b) : 0;
    });
  }
}
