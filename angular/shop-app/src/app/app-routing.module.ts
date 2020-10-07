import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BoProductDetailsComponent} from './components/backoffice/bo-product-details/bo-product-details.component';
import {BoProductListComponent} from './components/backoffice/bo-product-list/bo-product-list.component';
import {LayoutComponent} from './components/shared/layout/layout.component';
import {CartComponent} from './components/storefront/cart/cart.component';
import {ProductDetailsComponent} from './components/storefront/product-details/product-details.component';
import {ProductListComponent} from './components/storefront/product-list/product-list.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: 'cart', component: CartComponent},
      {path: 'product', component: ProductListComponent},
      {path: 'product/:id', component: ProductDetailsComponent},
      {path: 'backoffice/product', component: BoProductListComponent},
      {path: 'backoffice/product/add', component: BoProductDetailsComponent},
      {path: 'backoffice/product/:id', component: BoProductDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
