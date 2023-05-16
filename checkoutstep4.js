class Product {
  constructor(name, price, offer = null) {
    this.name = name;
    this.price = price;
    this.offer = offer;
  }
}

class Cart {
  constructor() {
    this.items = [];
    this.totalPrice = 0;
    this.totalDiscount = 0;
    this.totalTax = 0;
  }

  add(product, quantity) {
    let item = this.items.find((item) => item.product === product);
    if (item) {
      item.quantity += quantity;
    } else {
      item = { product, quantity, discount: 0 };
      this.items.push(item);
    }
    if (product.offer) {
      const discountQuantity = Math.floor(
        item.quantity / (product.offer.buy + product.offer.get)
      );
      item.discount = discountQuantity * product.price;
    }
    this.totalDiscount = this.items.reduce(
      (total, item) => total + item.discount,
      0
    );
    this.totalPrice =
      this.items.reduce(
        (total, item) => total + item.quantity * item.product.price,
        0
      ) - this.totalDiscount;
    this.totalPrice = Math.ceil(this.totalPrice * 100) / 100;
    this.totalTax = this.totalPrice * 0.125;
    this.totalTax = Math.ceil(this.totalTax * 100) / 100;
    this.totalPrice += this.totalTax; // Add tax to the total price
  }
}

module.exports = { Cart, Product };
