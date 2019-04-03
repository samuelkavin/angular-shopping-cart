import { Product } from './../model/product.type';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractRestService } from '../shared/service/abstract-rest.service';
import { CartService, BaseCartItem, CartItem, AddToCartType } from 'ng-shopping-cart';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {


    item = new BaseCartItem();
    items: CartItem[];
    isAdded: boolean;
    id: string;
    itemDetail: Product;

    @Input() quantity: number;
    @Input() type: AddToCartType = 'button';
    @Output() added = new EventEmitter<CartItem>();


    constructor(private route: ActivatedRoute,
        private cartService: CartService<BaseCartItem>,
        private abstractRestService: AbstractRestService) {
    }

    ngOnInit() {
        this.items = this.cartService.getItems();
        this.route.params.subscribe(params => {
            this.id = params['id'];
            this.loadItem();
        });
    }

    loadItem() {
        this.abstractRestService.get('men').subscribe(
            (response: any) => {
                response.filter(response => {
                    if (response.id === this.id) {
                        this.itemDetail = response;
                        this.item = new BaseCartItem(this.itemDetail);
                    }
                });
            },
            (error: any) => {
                console.log(error);
            }
        );
    }

    increase() {
        this.item.setQuantity(this.item.getQuantity() + 1);
        this.cartService.addItem(this.item);
    }

    decrease(item: CartItem) {
        if (this.item.getQuantity() > 1) {
            this.item.setQuantity(this.item.getQuantity() - 1);
            this.cartService.addItem(this.item);
        } else {
            this.cartService.removeItem(this.item.getId());
        }
    }

    private itemQuantity(): number {
        if (this.type === 'button') {
            if (this.quantity) {
                return this.quantity;
            }
            return this.item.getQuantity();
        }
    }

    addToCart(evt: any) {
        evt.stopPropagation();
        if (this.item) {
            const quantity = this.itemQuantity();
            this.item.setQuantity(quantity);
            this.cartService.addItem(this.item);
            this.added.emit(this.item);
            this.isAdded = true;
        }
    }

}
