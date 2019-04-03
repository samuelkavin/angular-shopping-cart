import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';
import { ProductMenComponent } from './../product-men/product-men.component';
import { ProductDetailComponent } from './../product-detail/product-detail.component';
import { ProductWomenComponent } from './../product-women/product-women.component';
import { ProductCheckoutComponent } from './../product-checkout/product-checkout.component';

const productRoutes: Routes = [
    {
        path: '', component: ProductComponent,
        children: [
            { path: 'men', component: ProductMenComponent },
            { path: 'women', component: ProductWomenComponent },
            { path: 'men/:id', component: ProductDetailComponent },
            { path: 'checkout', component: ProductCheckoutComponent },
            { path: '**', redirectTo: 'men', pathMatch: 'full' }
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
