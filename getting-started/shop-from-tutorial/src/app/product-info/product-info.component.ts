import { products } from './../products';
import { BasketService } from './../basket.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  product;

  constructor(
    private route: ActivatedRoute,
    private basketService: BasketService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.product = products[params.get('productId')];
    });
  }

  addToBasket(product) {
    this.basketService.addProduct(product);
    window.alert('Product added to basket!');
  }

}
