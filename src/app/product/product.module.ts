import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ProductComponent } from './product.component';
import { ProductListComponent } from './../product-list/product-list.component';
import { ProductRoutingModule } from './product.routing';
import { HeaderComponent } from './../header/header.component';
import { ProductMenComponent } from './../product-men/product-men.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    HeaderComponent,
    ProductMenComponent
  ],
  imports: [
    ProductRoutingModule,
    SharedModule,
    CommonModule
  ]
})
export class ProductModule { }
