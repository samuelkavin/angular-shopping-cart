import { Product } from './../model/product.type';
import { Component, OnInit } from '@angular/core';
import { AbstractRestService } from '../shared/service/abstract-rest.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-product-men',
    templateUrl: './product-men.component.html',
    styleUrls: ['./product-men.component.scss']
})
export class ProductMenComponent implements OnInit {

    items: Product;

    constructor(private abstractRestService: AbstractRestService,
        public router: Router) { }

    ngOnInit() {
        this.loadItems();
    }

    loadItems() {
        this.abstractRestService.get('men').subscribe(
            (response: any) => {
                this.items = response;
            },
            (error: any) => {
                console.log(error);
            }
        );
    }

    onView(id: string) {
        this.router.navigate(['/product/men/', id]);
    }
}
