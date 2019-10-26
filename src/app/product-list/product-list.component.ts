import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products
  constructor() { }

  ngOnInit() {
  }

  share() {
    window.alert('At CROMO-STORE,We Offer the best Brands of Phone. Contacts us at amosmoyo5300@gmail.com Or Click The Green Link to order!');
  }
  onNotify(data:any){
    window.alert(data);
  }

}
