const express = require("express");
const { createUser, logInUser } = require("../controllers/userController");
const router = express.Router();

router.route("/register").post(createUser);
router.route("/login").post(logInUser);

module.exports = router;
