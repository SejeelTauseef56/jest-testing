const { Cart, Product } = require("./checkoutstep4");

test("Add 3 Dove Soaps to the shopping cart", () => {
  const cart = new Cart();
  const doveSoap = new Product("Dove Soap", 39.99, { buy: 2, get: 1 });

  cart.add(doveSoap, 3);
  expect(cart.totalPrice).toBe(89.98);
  expect(cart.totalDiscount).toBe(39.99);
  expect(cart.totalTax).toBe(10.0);
});

test("Add 5 Dove Soaps to the shopping cart", () => {
  const cart = new Cart();
  const doveSoap = new Product("Dove Soap", 39.99, { buy: 2, get: 1 });

  cart.add(doveSoap, 5);
  expect(cart.totalPrice).toBe(179.96);
  expect(cart.totalDiscount).toBe(39.99);
  expect(cart.totalTax).toBe(20.0);
});

test("Add 3 Dove Soaps and 2 Axe Deos to the shopping cart", () => {
  const cart = new Cart();
  const doveSoap = new Product("Dove Soap", 39.99, { buy: 2, get: 1 });
  const axeDeo = new Product("Axe Deo", 89.99);

  cart.add(doveSoap, 3);
  cart.add(axeDeo, 2);
  expect(cart.totalPrice).toBe(292.46);
  expect(cart.totalDiscount).toBe(39.99);
  expect(cart.totalTax).toBe(32.5);
});
