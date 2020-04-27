const express = require("express");
const router = express.Router();
const productController = require("../controllers/product");

router.get("/", productController.getProducts);
router.post("/", productController.createProducts);
router.get("/:id", productController.getProduct);
router.put("/:id", productController.editProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
