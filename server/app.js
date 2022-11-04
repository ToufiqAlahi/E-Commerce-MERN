const express = require("express");
const app = express();
const errorMiddleware = require("./Middleware/error");
app.use(express.json());

// ROute Imports
const product = require("./routes/productRoute");

app.use("/api/v1", product);

// Middleware for Error
app.use(errorMiddleware);

module.exports = app;
