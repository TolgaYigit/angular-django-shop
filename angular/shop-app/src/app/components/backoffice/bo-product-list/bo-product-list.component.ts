import {Component, OnInit} from '@angular/core';
import {Observable, Subject, merge, of} from 'rxjs';
import {switchMap, map} from 'rxjs/operators';
import {Product} from 'src/app/interfaces/product';
import {ProductService} from 'src/app/services/product.service';

@Component({
  selector: 'app-bo-product-list',
  templateUrl: './bo-product-list.component.html',
  styleUrls: ['./bo-product-list.component.css']
})
export class BoProductListComponent implements OnInit {
  products$: Observable<Product[]>;
  refresh$: Subject<void> = new Subject<void>();

  displayedColumns = ['id', 'name', 'price', 'actions'];

  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.products$ = merge(of(null), this.refresh$).pipe(
      switchMap(() => this.productService.getAll())
    );
  }

  delete(id: number) {
    this.productService
      .delete(id)
      .toPromise()
      .then(_ => this.refresh$.next());
  }
}
