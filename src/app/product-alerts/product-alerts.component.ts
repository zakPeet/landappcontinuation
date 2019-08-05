import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'; //setting it up to receive input.
import { Output,EventEmitter } from '@angular/core'; //will be producing an output

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
   @Input() product;  // recieved input prepared for above in imports
  @Output() notify = new EventEmitter;  // for producing output/emitting an EventEmitter
  
  constructor() { }

  ngOnInit() {
  }

}