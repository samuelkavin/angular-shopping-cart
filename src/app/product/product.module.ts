import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import {ShoppingCartModule} from 'ng-shopping-cart';

import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product.routing';
import { HeaderComponent } from './../header/header.component';
import { ProductMenComponent } from './../product-men/product-men.component';
import { ProductDetailComponent } from './../product-detail/product-detail.component';
import { ProductWomenComponent } from './../product-women/product-women.component';
import { ProductCheckoutComponent } from './../product-checkout/product-checkout.component';

@NgModule({
  declarations: [
    ProductComponent,
    HeaderComponent,
    ProductMenComponent,
    ProductDetailComponent,
    ProductWomenComponent,
    ProductCheckoutComponent
  ],
  imports: [
    ProductRoutingModule,
    SharedModule,
    CommonModule,
    ShoppingCartModule
  ]
})
export class ProductModule { }
