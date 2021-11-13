import {Component, Input} from '@angular/core';
import {Item} from "../shared/item.module";

@Component({
  selector: 'app-items-block',
  templateUrl: './items-block.component.html',
  styleUrls: ['./items-block.component.css']
})
export class ItemsBlockComponent {
  @Input() items!: Item[];
}
