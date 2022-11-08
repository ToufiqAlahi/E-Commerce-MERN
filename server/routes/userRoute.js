const express = require("express");

const {
  createUser,
  logInUser,
  logout,
  forgotPassword,
  resetPassword,
  getUserDetails,
  changePassword,
} = require("../controllers/userController");

const { isAuthenticatedUser, authorizedRoles } = require("../Middleware/auth");

const router = express.Router();

router.route("/register").post(createUser);

router.route("/login").post(logInUser);

router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);

router.route("/password/update").put(isAuthenticatedUser, changePassword);

router.route("/me").get(isAuthenticatedUser, getUserDetails);

router.route("/logout").get(logout);

module.exports = router;
