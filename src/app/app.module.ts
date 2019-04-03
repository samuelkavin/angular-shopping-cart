import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RestServiceProvider } from './shared/service/service.provider';
import { ProductService } from './shared/service/product.service';
import { ShoppingCartModule } from 'ng-shopping-cart';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ShoppingCartModule.forRoot({
        serviceType: 'localStorage',
        serviceOptions: {
          storageKey: 'NgShoppingCart',
          clearOnError: true
        }
    })
  ],
  providers: [ HttpClient, RestServiceProvider, ProductService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
