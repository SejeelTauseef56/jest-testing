const ShoppingCart = require("./checkoutstep5");

describe("ShoppingCart", () => {
  test("should calculate totals correctly with Buy 1 Get 50% off offer", () => {
    const cart = new ShoppingCart();
    const doveSoap = { name: "Dove Soap", price: 39.99 };

    cart.addItem(doveSoap);
    cart.addItem(doveSoap);

    const totals = cart.calculateTotal();

    expect(Number(totals.totalPrice.toFixed(2))).toBe(67.48);
    expect(Number(totals.totalDiscount.toFixed(2))).toBe(20.0);
    expect(Number(totals.totalTax.toFixed(2))).toBe(7.5);
  });
});
