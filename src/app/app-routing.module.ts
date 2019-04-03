import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
    // { path: '', component: AppComponent },
    { path: 'product', loadChildren: './product/product.module#ProductModule' },
    { path: '**', redirectTo: 'product/men', pathMatch: 'full' },
    { path: '', redirectTo: '/product', pathMatch: 'full' }

];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }
