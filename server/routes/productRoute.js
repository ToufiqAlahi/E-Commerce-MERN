const express = require("express");
const route = require("../app");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  removeProduct,
  getProductDetails,
} = require("../controllers/productController");

const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/product/new").post(createProduct);
router.route("/product/:id").put(updateProduct).delete(removeProduct).get(getProductDetails) ;

module.exports = router;
