const express = require("express");
const route = require("../app");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  removeProduct,
  getProductDetails,
} = require("../controllers/productController");
const { isAuthenticatedUser, authorizedRoles } = require("../Middleware/auth");

const router = express.Router();

router.route("/products")
  .get(getAllProducts);

router
  .route("/product/new")
  .post(isAuthenticatedUser, authorizedRoles("admin"), createProduct);


router
  .route("/product/:id")
  .put(isAuthenticatedUser, authorizedRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizedRoles("admin"), removeProduct)
  .get(getProductDetails);

module.exports = router;
