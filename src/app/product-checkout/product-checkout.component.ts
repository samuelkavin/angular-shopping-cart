import { Component, OnInit, Input, SimpleChanges, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartViewDisplay, CartService, BaseCartItem, LocaleFormat, CartItem } from 'ng-shopping-cart';
import { Router } from '@angular/router';

@Component({
    selector: 'app-product-checkout',
    templateUrl: './product-checkout.component.html',
    styleUrls: ['./product-checkout.component.scss']
})
export class ProductCheckoutComponent implements OnInit, OnDestroy {

    isLinear = true;
    private _serviceSubscription: any;
    display: CartViewDisplay = 'responsive-table';
    @Input() customEmptyContent = false;

    empty = true;
    items: CartItem[];
    cost = 0;


    constructor(protected router: Router,
                private cartService: CartService<BaseCartItem>) { }

    update() {
        this.empty = this.cartService.isEmpty();
        this.items = this.cartService.getItems();
        this.cost = this.cartService.totalCost();
    }

    increase(item) {
        item.setQuantity(item.getQuantity() + 1);
        this.cartService.addItem(item);
    }

    decrease(item) {
        if (item.getQuantity() > 1) {
            item.setQuantity(item.getQuantity() - 1);
            this.cartService.addItem(item);
        } else {
            this.cartService.removeItem(item.getId());
        }
    }

    ngOnInit(): void {
        this.update();
        this._serviceSubscription = this.cartService.onChange.subscribe(() => {
            this.update();
        });
    }

    ngOnDestroy(): void {
        this._serviceSubscription.unsubscribe();
    }

    onRemove(item) {
        this.cartService.removeItem(item);
    }

    onClear() {
        this.cartService.clear();
        this.router.navigate(['/product/men']);
    }

}
