const Product = require("../models/product");

const getCartItems = (req, res, next) => {
  //   console.log(req.user);
  req.user
    .populate("cart.items.$.productId")
    // .execPopulate()
    .then((user) => {
      const products = user.cart.items;
    })
    .catch((err) => console.log(err));
};
const postToCart = (req, res, next) => {
  const productId = req.params.id;
  //console.log(productId);
  Product.findById(productId)
    .then((product) => {
      //  console.log(product);
      res.send("Product Added Into Cart");
      return req.user.addToCart(product);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  postToCart,
  getCartItems,
};
