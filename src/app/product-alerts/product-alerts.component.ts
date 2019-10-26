import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product:any;

  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleClick(){
    this.notify.emit("The price of this product is below 101 dollas! You think this is a fair PRICE!? You can  now  go and get it")
  }

}
