const express = require("express");
const {
  createUser,
  logInUser,
  logout,
  forgotPassword,
  resetPassword,
} = require("../controllers/userController");
const router = express.Router();

router.route("/register").post(createUser);

router.route("/login").post(logInUser);

router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);

router.route("/logout").get(logout);

module.exports = router;
