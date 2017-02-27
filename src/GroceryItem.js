// your GroceryItem code, here
class GroceryItem {
  constructor(name, quantity=0) {
    this.name = name;
    //quantity can be omitted, which automatically defines quantity as 1
    if (quantity === 0) {
      this.quantity = 1;
    }
    else {
      this.quantity = quantity;
    }
  }

  toListElement() {
    return `<li> ${this.name}: ${this.quantity} </li>`;
  }
}
