import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './../product-list/product-list.component';
import { ProductMenComponent } from './../product-men/product-men.component';

const productRoutes: Routes = [
    { path: '', component: ProductComponent,
        children: [
            { path: 'men', component: ProductMenComponent }
        ]

    }

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(productRoutes)
  ],
  exports: [RouterModule]
})

export class ProductRoutingModule { }
