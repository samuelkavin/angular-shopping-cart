import { Component, OnInit } from '@angular/core';
import { CartService, CartItem, BaseCartItem } from 'ng-shopping-cart';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(private cartService: CartService<BaseCartItem>) {
        cartService.entries();
    }

    ngOnInit() { }

}
