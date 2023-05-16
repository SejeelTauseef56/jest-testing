// checkoutstep6.test.js

const calculateTotalPrice = require("./checkoutstep6");

test("Calculate total price with global discount", () => {
  const cart = [
    { name: "Dove Soap", price: 39.99, quantity: 5 },
    { name: "Axe Deo", price: 89.99, quantity: 4 },
  ];

  const taxRate = 0.125;

  const result = calculateTotalPrice(cart, taxRate);

  expect(result.total).toBe("503.92");
  expect(result.discount).toBe("111.98");
  expect(result.tax).toBe("55.99");
});
