import { Component } from '@angular/core';
import {Item} from "./shared/item.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Item[] = [
    new Item('Hamburger', 80, 0, 'https://w1.pngwing.com/pngs/768/905/png-transparent-food-icon-cheeseburger-hamburger-french-fries-veggie-burger-fast-food-cartoon-drawing.png'),
    new Item('Coffee', 70, 0, 'https://img.freepik.com/free-vector/paper-coffee-cup-white-background-blank-template-coffee-drink_194782-79.jpg?size=338&ext=jpg'),
    new Item('Cheeseburger', 90, 0, 'https://i.pinimg.com/736x/01/1d/1d/011d1d429a11a56939f6b4c2831f1061.jpg'),
    new Item('Tea', 50, 0, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWFdIcZQMjWKTHOUFjh7fTb5NdQauAQgd-ZReAsnVu-YWev-EbvzIWqVlYvyWDtJbqnK8&usqp=CAU'),
    new Item('Fries', 45, 0, 'https://i.pinimg.com/736x/4d/c6/94/4dc694f26be0b74aa50828988ce1d4e6.jpg'),
    new Item('Cola', 40, 0, 'https://media.istockphoto.com/vectors/cartoon-with-contour-of-disposable-paper-cup-with-soda-and-straw-vector-id843213594?k=6&m=843213594&s=170667a&w=0&h=krYT1V8BjhIKviZWZHuTpaDtWSDZol7wzlH3km6sHcc='),
  ];
}
