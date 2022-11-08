const express = require("express");

const {
  createUser,
  logInUser,
  logout,
  forgotPassword,
  resetPassword,
  getUserDetails,
  changePassword,
  updateProfile,
  getAllUsers,
  getSingleUser,
} = require("../controllers/userController");

const { isAuthenticatedUser, authorizedRoles } = require("../Middleware/auth");

const router = express.Router();

router.route("/register").post(createUser);

router.route("/login").post(logInUser);

router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);

router.route("/password/update").put(isAuthenticatedUser, changePassword);

router.route("/me").get(isAuthenticatedUser, getUserDetails);

router.route("/me/update").put(isAuthenticatedUser, updateProfile);

router.route("/admin/users").get(isAuthenticatedUser, authorizedRoles("admin"), getAllUsers);

router
  .route("/admin/user/:id")
  .get(isAuthenticatedUser, authorizedRoles("admin"), getSingleUser);

router.route("/logout").get(logout);


module.exports = router;
