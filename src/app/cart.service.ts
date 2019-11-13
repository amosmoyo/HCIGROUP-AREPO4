import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'

import { Customer } from './login';

//import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database'

declare let toastr:any;

@Injectable({
  providedIn: 'root',
})

export class CartService {
  customersRef: AngularFireList<any>; 
  customerRef: AngularFireObject<any>;
  items = [];

  constructor( private http:HttpClient,private db: AngularFireDatabase) {
   }

  addToCart(product){
    this.items.push(product)
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }

  shipping(){
    return this.http.get("assets/shipping.json");
  }

  // Create Costumer
  AddCustomer(customer: Customer) {
    this.customersRef.push({
      username: customer.username,
      email: customer.email,
      message:customer.message,
      delivary:customer.delivary
    })
  }

  success(message:string,title?:string){
     toastr.success(message,title)
  }

  /*/ Fetch Single Customer Object
  GetCustomer(id: string) {
    this.customerRef = this.db.object('customers-list/' + id);
    return this.customerRef;
  }*/

   
  // Fetch Customer List
  GetCustomersList() {
    this.customersRef = this.db.list('customers-list');
    return this.customersRef;
  }

  /*/ Update Customer Object
  UpdateCustomer(customer: Customer) {
    this.customerRef.update({
      username: customer.username,
      email: customer.email,
      meassage:customer.message
    })
  }*/  

  /*/ Delete Customer Object
  DeleteCustomer(id: string) { 
    this.customerRef = this.db.object('customers-list/'+id);
    this.customerRef.remove();
  }*/    
 
  
  /*// Creates an Ad, then returns as an object
  createAd(): FirebaseObjectObservable<AdListing> {
    const adDefault = new AdListing()
    const adKey = this.db.list('/ads').push(adDefault).key
    return this.db.object('/ads/' + adKey)
  }


  /// Updates an existing Ad
  updateAd(login: FirebaseObjectObservable<AdListing>, data: any) {
    return login.update(data)
  }  */
}
