const express = require("express");

const {
  createUser,
  logInUser,
  logout,
  forgotPassword,
  resetPassword,
  getUserDetails,
} = require("../controllers/userController");

const { isAuthenticatedUser, authorizedRoles } = require("../Middleware/auth");

const router = express.Router();

router.route("/register").post(createUser);

router.route("/login").post(logInUser);

router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);

router.route("/me").get(isAuthenticatedUser, getUserDetails);

router.route("/logout").get(logout);

module.exports = router;
