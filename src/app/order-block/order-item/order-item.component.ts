import {Component, Input} from '@angular/core';
import {Item} from "../../shared/item.module";

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent {
  @Input() item!: Item;
}
