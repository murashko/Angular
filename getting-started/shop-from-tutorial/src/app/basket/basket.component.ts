import { BasketService } from './../basket.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  products;
  checkoutForm;

  constructor(
    private basketService: BasketService,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit(): void {
    this.products = this.basketService.getProducts();
  }

  submit(customerData) {
    this.products = this.basketService.cleareBasket();
    this.checkoutForm.reset();
    console.warn('Your order accepted', customerData);
  }
}
