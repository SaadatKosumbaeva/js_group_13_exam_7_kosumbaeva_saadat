import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Item} from "../../shared/item.module";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() item!: Item;
  @Output() itemClick = new EventEmitter();

  onItemClick() {
    this.itemClick.emit();
  }
}
