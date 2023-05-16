const { ShoppingCart, Product } = require("./checkoutstep3");

describe("Step 3: Calculate the tax rate of the shopping cart with multiple items", () => {
  let cart;
  let doveSoap;
  let axeDeo;

  beforeEach(() => {
    cart = new ShoppingCart(0.125);
    doveSoap = new Product("Dove Soap", 39.99);
    axeDeo = new Product("Axe Deo", 99.99);
  });

  test("The shopping cart should contain 2 Dove Soaps each with a unit price of 39.99 and the shopping cart should contain 2 Axe Deos each with a unit price of 99.99 and the total sales tax amount for the shopping cart should equal 35.00 and the shopping cart's total price should equal 314.96", () => {
    cart.addProduct(doveSoap, 2);
    cart.addProduct(axeDeo, 2);
    expect(cart.products.length).toBe(4);
    expect(cart.products[0].name).toBe("Dove Soap");
    expect(cart.products[0].price).toBe(39.99);
    expect(cart.products[2].name).toBe("Axe Deo");
    expect(cart.products[2].price).toBe(99.99);
    expect(cart.totalTax()).toBe(34.99);
    expect(cart.totalPrice()).toBe(314.95);
  });
});
