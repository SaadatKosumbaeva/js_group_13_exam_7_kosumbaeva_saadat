import {Component, Input} from '@angular/core';
import {Item} from "../../shared/item.module";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() item!: Item;
}
