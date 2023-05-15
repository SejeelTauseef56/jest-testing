const { addDoveSoapsToCart } = require("./checkoutstep1");

describe("shopping cart", () => {
  test("adding 5 Dove Soaps to the cart", () => {
    const { cart } = addDoveSoapsToCart(5);
    const expectedTotalPrice = 199.95;
    expect(cart.length).toBe(5);
    expect(cart[0]).toMatchObject({ name: "Dove Soap", price: 39.99 });
    expect(cart[cart.length - 1]).toMatchObject({
      name: "Dove Soap",
      price: 39.99,
    });
    expect(expectedTotalPrice).toBe(199.95);
  });
});
