import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Item} from "../shared/item.module";

@Component({
  selector: 'app-items-block',
  templateUrl: './items-block.component.html',
  styleUrls: ['./items-block.component.css']
})
export class ItemsBlockComponent {
  @Input() items!: Item[];
  @Output() itemAdd = new EventEmitter();

  clickItem(index: number) {
    this.itemAdd.emit(index);
  }
}
