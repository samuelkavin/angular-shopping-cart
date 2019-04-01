import { Component, OnInit } from '@angular/core';
import { AbstractRestService } from '../shared/service/abstract-rest.service';

@Component({
  selector: 'app-product-men',
  templateUrl: './product-men.component.html',
  styleUrls: ['./product-men.component.scss']
})
export class ProductMenComponent implements OnInit {

    items;

    constructor(private abstractRestService: AbstractRestService) { }

    ngOnInit() {
        this.abstractRestService.get('men').subscribe(
            (response: any) => {
                this.items = response;
            console.log('response', response);
            },
            (error: any) => {
            console.log(error);
            }
        );
    }

}
