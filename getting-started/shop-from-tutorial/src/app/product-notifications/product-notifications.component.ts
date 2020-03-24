import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-notifications',
  templateUrl: './product-notifications.component.html',
  styleUrls: ['./product-notifications.component.css']
})
export class ProductNotificationsComponent {
  @Input() product;
  @Output() notify = new EventEmitter();
}
