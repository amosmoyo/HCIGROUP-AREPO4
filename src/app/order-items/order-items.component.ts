import { Component, OnInit } from '@angular/core';

//import { products } from '../products';

import { FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';

import { CartService } from '../cart.service'

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {
  items:any

  public checkoutForm:FormGroup;

  submitted = false;

  constructor(public cartService:CartService,public formBuilder:FormBuilder) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.cartService.GetCustomersList();
    this.checkoutsForm();
  }
  get err(){
    return this.checkoutForm.controls;
  }

  checkoutsForm(){
     this.checkoutForm = this.formBuilder.group({
       username:['',Validators.required],
       email:['',[Validators.email,Validators.required]],
       message:['',Validators.required],
       delivary:['']
     })
  }
   //err.email.$dirty && email.$invalid &&

  onSubmit(userdata:any){

    this.submitted = true;

    this.items = this.cartService.clearCart();
    this.cartService.AddCustomer(this.checkoutForm.value);
    /*this.cartService.success('You order was successfully placed');*/
    this.checkoutForm.reset();
    window.alert(`YOU MUST HAVE FILLED THE FORM FOR YOUR ORDER TO PROCESSED.REMEMBER TO CLICK HOME BUTTON TO MAKE ANOTHER ORDER!
                 PRESS OK!`)
  }
  /*successEvent(itemName){
    this.cartService.success('You order was successfully placed');
  }*/

}
