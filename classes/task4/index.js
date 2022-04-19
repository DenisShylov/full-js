class Order {
  // put your code here
  constructor(price, city, type) {
    this.id = '1';
    this.price = price;
    this.dateCreated = new Date();
    this.isConfirmed = false;
    this.dateConfirmed = null;
    this.city = city;
    this.type = type;
  }

  checkPrice() {
    if (this.price > 1000) {
      return true;
    }
    return false;
  }

  confirmOrder() {
    if (this.isConfirmed === false) {
      this.isConfirmed = true;
      this.dateConfirmed = new Date();
    }
  }

  isValidType() {
    if (this.type === 'Buy' || this.type === 'Sell') {
      return true;
    }
    return false;
  }
}
const ord = new Order(900, 'Kharkiv', 'Buy');
console.log(ord.confirmOrder());
