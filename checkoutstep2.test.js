const { addDoveSoapsToCart } = require("./checkoutstep2");

describe("shopping cart", () => {
  test("adding 5 Dove Soaps to the cart, then adding another 3 Dove soaps in the shopping cart", () => {
    let { cart } = addDoveSoapsToCart(5);
    let expectedTotalPrice = 199.95;
    expect(cart.length).toBe(5);
    const { cart: updatedCart } = addDoveSoapsToCart(3);
    cart = [...cart, ...updatedCart];
    expectedTotalPrice += updatedCart.length * 39.99;
    expect(cart.length).toBe(8);
    expect(cart[0]).toMatchObject({ name: "Dove Soap", price: 39.99 });
    expect(cart[cart.length - 1]).toMatchObject({
      name: "Dove Soap",
      price: 39.99,
    });
    expect(Number(expectedTotalPrice.toFixed(2))).toBe(319.92);
  });
});
