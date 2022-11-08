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
  .route("/admin/product/new")
  .post(isAuthenticatedUser, authorizedRoles("admin"), createProduct);


router
  .route("/admin/product/:id")
  .put(isAuthenticatedUser, authorizedRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizedRoles("admin"), removeProduct);
  
  router.route("/product/:id").get(getProductDetails);

module.exports = router;
