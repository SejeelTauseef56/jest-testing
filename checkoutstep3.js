class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart {
  constructor(taxRate) {
    this.products = [];
    this.taxRate = taxRate;
  }

  addProduct(product, quantity) {
    for (let i = 0; i < quantity; i++) {
      this.products.push(product);
    }
  }

  totalTax() {
    let tax = 0;
    this.products.forEach((product) => {
      tax += product.price * this.taxRate;
    });
    return Math.round(tax * 100) / 100;
  }

  totalPrice() {
    let total = 0;
    this.products.forEach((product) => {
      total += product.price;
    });
    total += this.totalTax();
    return Math.round(total * 100) / 100;
  }
}

module.exports = { ShoppingCart, Product };
