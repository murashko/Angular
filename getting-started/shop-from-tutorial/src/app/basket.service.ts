import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  products = [];

  constructor(
    private http: HttpClient
  ) { }

  addProduct(product) {
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }

  cleareBasket() {
    this.products = [];
    return this.products;
  }

  getShippingTypes() {
    return this.http.get('/assets/shipping-types.json');
  }
}
