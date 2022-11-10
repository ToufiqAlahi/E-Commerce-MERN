const express = require("express");
const { newOrder } = require("../controllers/orderController");
const router = express.Router();



const { isAuthenticatedUser, authorizedRoles } = require("../Middleware/auth");


router.route("/order/new").post(isAuthenticatedUser, newOrder);

module.exports = router;