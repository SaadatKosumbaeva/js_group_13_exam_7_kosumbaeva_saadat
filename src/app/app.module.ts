import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OrderBlockComponent } from './order-block/order-block.component';
import { ItemsBlockComponent } from './items-block/items-block.component';
import {ItemComponent} from "./items-block/item/item.component";
import {OrderItemComponent} from "./order-block/order-item/order-item.component";

@NgModule({
  declarations: [
    AppComponent,
    OrderBlockComponent,
    OrderItemComponent,
    ItemsBlockComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
