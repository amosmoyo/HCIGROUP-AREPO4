import { Component, OnInit } from '@angular/core';

//import { products } from '../products';

import { FormBuilder, FormGroup} from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {
  items:any

  public checkoutForm:FormGroup;

  constructor(public cartService:CartService,public formBuilder:FormBuilder) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.cartService.GetCustomersList();
    this.checkoutForm();
  }

  checkoutForm(){
     this.checkoutForm = this.formBuilder.group({
       username:'',
       email:''
     })
  }

  onSubmit(userdata:any){
    
    this.items = this.cartService.clearCart();
    this.cartService.AddCustomer(this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}
