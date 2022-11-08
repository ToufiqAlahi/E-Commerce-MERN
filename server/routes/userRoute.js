const express = require("express");
const {
  createUser,
  logInUser,
  logout,
  forgotPassword,
} = require("../controllers/userController");
const router = express.Router();

router.route("/register").post(createUser);

router.route("/login").post(logInUser);

router.route("/password/forgot").post(forgotPassword);

router.route("/logout").get(logout);

module.exports = router;
