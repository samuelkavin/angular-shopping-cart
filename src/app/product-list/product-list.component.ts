import { Component, OnInit } from '@angular/core';
import { AbstractRestService } from '../shared/service/abstract-rest.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private abstractRestService: AbstractRestService) { }

  ngOnInit() {

    
  }

}
