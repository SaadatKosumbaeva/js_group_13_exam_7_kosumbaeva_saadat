export class Item {
  constructor(public name: string, public price: number, public amount: number, public imageUrl: string) {}

  getTotalPrice() {
    return this.price * this.amount;
  }
}
