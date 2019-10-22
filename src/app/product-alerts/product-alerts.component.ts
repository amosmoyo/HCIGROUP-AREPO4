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
    this.notify.emit("The price of this product is below 101 dollas! You this is fair??? you can go and get it")
  }

}
