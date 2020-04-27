const Product = require("../models/product");

// create product
const createProducts = (req, res, next) => {
  const product = new Product({
    title: req.body.title,
    price: req.body.price,
    imgUrl: req.body.imgUrl,
    desc: req.body.desc,
    userId: req.user,
  });
  product
    .save()
    .then((result) => {
      //   console.log(result);
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
// get products
const getProducts = (req, res, next) => {
  Product.find()
    // .populate("userId")
    // .select("name email")
    .then((result) => {
      // console.log(result);
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
// get product
const getProduct = (req, res, next) => {
  const id = req.params.id;
  Product.findById(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
//edit product
const editProduct = (req, res, next) => {
  const id = req.params.id;
  const product = req.body;
  Product.findByIdAndUpdate(id, { $set: product })
    .then((result) => {
      console.log("data Updated !");
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
// delete Product
const deleteProduct = (req, res, next) => {
  const id = req.params.id;
  Product.findByIdAndDelete(id)
    .then((result) => {
      console.log("data Deleted");
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = {
  createProducts,
  getProducts,
  getProduct,
  editProduct,
  deleteProduct,
};
