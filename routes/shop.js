const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shop");

router.get("/cart", shopController.getCartItems);
router.post("/cart/:id", shopController.postToCart);

module.exports = router;
