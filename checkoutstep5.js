class ShoppingCart {
  constructor() {
    this.items = [];
    this.salesTaxRate = 0.125;
  }

  addItem(item) {
    this.items.push(item);
  }

  calculateTotal() {
    let totalPrice = 0;
    let totalDiscount = 0;

    this.items.forEach((item, index) => {
      totalPrice += item.price;
      if (index % 2 === 1) {
        const discount = item.price * 0.5;
        totalDiscount += discount;
        totalPrice -= discount;
      }
    });

    const totalTax = totalPrice * this.salesTaxRate;
    const roundedTotalPrice = +totalPrice.toFixed(2); // Round up to 2 decimal places
    const totalPriceWithTax = roundedTotalPrice + totalTax;

    return {
      totalPrice: totalPriceWithTax,
      totalDiscount,
      totalTax,
    };
  }
}

module.exports = ShoppingCart;
