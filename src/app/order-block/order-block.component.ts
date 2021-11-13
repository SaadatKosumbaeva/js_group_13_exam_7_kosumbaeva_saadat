import {Component, Input} from '@angular/core';
import {Item} from "../shared/item.module";

@Component({
  selector: 'app-order-block',
  templateUrl: './order-block.component.html',
  styleUrls: ['./order-block.component.css']
})
export class OrderBlockComponent {
  @Input() orderItems!: Item[];
  orderIsEmpty = true;

  orderEmpty() {
    if (this.orderItems.length !== 0) {
      this.orderIsEmpty = false;
    }
    return this.orderIsEmpty;
  }
}
