// checkoutstep6.js

function calculateTotalPrice(cart, taxRate) {
  let subTotal = 0;
  let discount = 0;
  let tax = 0;
  let total = 0;

  for (let item of cart) {
    subTotal += item.price * item.quantity;
  }

  if (subTotal >= 500) {
    discount = subTotal * 0.2;
  }

  tax = (subTotal - discount) * taxRate;
  total = subTotal - discount + tax;

  return {
    subTotal: subTotal.toFixed(2),
    discount: discount.toFixed(2),
    tax: tax.toFixed(2),
    total: total.toFixed(2),
  };
}

module.exports = calculateTotalPrice;
