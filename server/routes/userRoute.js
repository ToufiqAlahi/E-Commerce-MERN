const express = require("express");
const { createUser, logInUser, logout } = require("../controllers/userController");
const router = express.Router();

router.route("/register").post(createUser);

router.route("/login").post(logInUser);

router.route("/logout").get(logout);

module.exports = router;
