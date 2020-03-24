import { BasketService } from './../basket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping-types',
  templateUrl: './shipping-types.component.html',
  styleUrls: ['./shipping-types.component.css']
})
export class ShippingTypesComponent implements OnInit {
  shippingTypes;

  constructor(
    private basketService: BasketService
  ) { }

  ngOnInit(): void {
    this.shippingTypes = this.basketService.getShippingTypes();
  }

}
