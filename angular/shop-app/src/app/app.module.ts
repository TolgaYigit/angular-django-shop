import {LayoutModule} from '@angular/cdk/layout';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BoProductDetailsComponent} from './components/backoffice/bo-product-details/bo-product-details.component';
import {BoProductListComponent} from './components/backoffice/bo-product-list/bo-product-list.component';
import {CartIconComponent} from './components/shared/cart-icon/cart-icon.component';
import {LayoutComponent} from './components/shared/layout/layout.component';
import {ProductDetailsComponent} from './components/storefront/product-details/product-details.component';
import {ProductListComponent} from './components/storefront/product-list/product-list.component';
import {CartComponent} from './components/storefront/cart/cart.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    ProductListComponent,
    LayoutComponent,
    BoProductListComponent,
    BoProductDetailsComponent,
    CartComponent,
    CartIconComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    FlexLayoutModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
