function addDoveSoapsToCart(numberOfDoveSoaps) {
  let cart = [];
  const doveSoap = {
    name: "Dove Soap",
    price: 39.99,
  };
  cart = Array(numberOfDoveSoaps).fill(doveSoap);
  const expectedTotalPrice = numberOfDoveSoaps * doveSoap.price;
  return { cart, expectedTotalPrice };
}

module.exports = { addDoveSoapsToCart };
