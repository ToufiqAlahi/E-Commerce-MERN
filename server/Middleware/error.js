const ErrorHandler = require("../Utils/errorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // wrong mongoDB cast Error
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid ${err.path} `;
    err = new ErrorHandler(message, 400);
  }

  // Mongoose Duplicate Key (E11000 duplicate key error) Error:
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} is not acceptable`;
    err = new ErrorHandler(message, 400);
  }

  // wrong JWT Error
  if (err.name === "jsonWebTokenError") {
    const message = `Invalid JSON Web Token. Please Try Again`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
