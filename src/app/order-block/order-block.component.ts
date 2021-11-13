import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Item} from "../shared/item.module";

@Component({
  selector: 'app-order-block',
  templateUrl: './order-block.component.html',
  styleUrls: ['./order-block.component.css']
})
export class OrderBlockComponent {
  @Input() orderItems!: Item[];
  @Output() itemDelete = new EventEmitter();
  orderIsEmpty = true;

  orderEmpty() {
    if (this.orderItems.length !== 0) {
      this.orderIsEmpty = false;
    } else if (this.orderItems.length === 0) {
      this.orderIsEmpty = true;
    }
    return this.orderIsEmpty;
  }

  onDeleteItem(index: number) {
    this.itemDelete.emit(index);
  }
}
