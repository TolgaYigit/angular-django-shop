import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subject} from 'rxjs';
import {filter, switchMap, takeUntil} from 'rxjs/operators';
import {emptyProduct, Product} from 'src/app/interfaces/product';
import {ProductService} from 'src/app/services/product.service';

@Component({
  selector: 'app-bo-product-details',
  templateUrl: './bo-product-details.component.html',
  styleUrls: ['./bo-product-details.component.css']
})
export class BoProductDetailsComponent implements OnInit, OnDestroy {
  constructor(
    private productService: ProductService,
    private acitvatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  public product: Product = emptyProduct();
  public error: string;
  private onDestroy$: Subject<void> = new Subject<void>();

  ngOnInit(): void {
    this.acitvatedRoute.params
      .pipe(
        filter(params => params.id),
        switchMap(params => this.productService.getById(params.id)),
        takeUntil(this.onDestroy$)
      )
      .subscribe(product => (this.product = product));
  }

  ngOnDestroy() {
    this.onDestroy$.next();
  }

  upsertProduct() {
    if (this.product.id) {
      this.updateProduct();
    } else {
      this.createProduct();
    }
  }

  private createProduct() {
    this.productService
      .create(this.product)
      .toPromise()
      .then(_ => {
        this.router.navigate(['/backoffice/product']);
      })
      .catch(err => (this.error = err.error.message));
  }

  private updateProduct() {
    this.productService
      .edit(this.product)
      .toPromise()
      .then(_ => {
        this.router.navigate(['/backoffice/product']);
      })
      .catch(err => (this.error = err.error.message));
  }
}
