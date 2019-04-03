import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

    itemList;
    constructor() {
        this.itemList = JSON.parse(localStorage.getItem('NgShoppingCart') || '[]');
    }

    private updateCart() {
        localStorage.setItem('todo-app', JSON.stringify(this.itemList));
    }

    addItem(item) {
        this.itemList.push(item);
        this.updateCart();
    }

    removeItem(item) {
        this.itemList.splice(this.itemList.indexOf(item), 1);
        this.updateCart();
    }




}
