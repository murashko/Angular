import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductNotificationsComponent } from './product-notifications/product-notifications.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { BasketService } from './basket.service';
import { BasketComponent } from './basket/basket.component';
import { ShippingTypesComponent } from './shipping-types/shipping-types.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    ProductListComponent,
    ProductNotificationsComponent,
    ProductInfoComponent,
    BasketComponent,
    ShippingTypesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'product/:productId', component: ProductInfoComponent },
      { path: 'basket', component: BasketComponent },
      { path: 'shipping-types', component: ShippingTypesComponent }
    ])
  ],
  providers: [BasketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
