import {Component} from '@angular/core';
import {Item} from "./shared/item.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Item[] = [
    new Item('Hamburger', 80, 0, 'https://w1.pngwing.com/pngs/768/905/png-transparent-food-icon-cheeseburger-hamburger-french-fries-veggie-burger-fast-food-cartoon-drawing.png'),
    new Item('Coffee', 70, 0, 'https://i.pinimg.com/736x/c0/87/5d/c0875ddbc03b943b92126d36fa4cab5e.jpg'),
    new Item('Cheeseburger', 90, 0, 'https://i.pinimg.com/736x/01/1d/1d/011d1d429a11a56939f6b4c2831f1061.jpg'),
    new Item('Tea', 50, 0, 'https://2.bp.blogspot.com/-VlI9d5NjO1M/Todj1ccDazI/AAAAAAAAA6c/YabTf_BZiOI/s1600/%25D1%2587%25D0%25B0%25D1%2588%25D0%25BA%25D0%25B0+%25D1%2587%25D0%25B0%25D1%258F.jpg'),
    new Item('Fries', 45, 0, 'https://www.seekpng.com/png/detail/834-8346578_big-image-french-fries-cartoon.png'),
    new Item('Cola', 40, 0, 'https://zhabinka.pizza-italiana.by/wp-content/uploads/2020/07/cola_glass.jpg'),
  ];

  orderItems: Item[] = [];

  onAddItem(index: number) {
    this.items[index].amount++;
    if (this.orderItems.length > 0) {
      let isIncludes = this.orderItems.includes(this.items[index]);
      if (isIncludes) {
        return;
      } else {
        this.orderItems.push(this.items[index]);
      }
    } else {
      this.orderItems.push(this.items[index]);
    }
  }

  deleteItem(index: number) {
    this.orderItems[index].amount = 0;
    this.orderItems.splice(index, 1);
  }
}
