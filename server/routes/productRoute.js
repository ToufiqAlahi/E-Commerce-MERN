const express = require("express");
const route = require("../app");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  removeProduct,
  getProductDetails,
} = require("../controllers/productController");
const { isAuthenticatedUser } = require("../Middleware/auth");

const router = express.Router();

router.route("/products").get( isAuthenticatedUser, getAllProducts);
router.route("/product/new").post(createProduct);
router.route("/product/:id").put(updateProduct).delete(removeProduct).get(getProductDetails) ;

module.exports = router;
