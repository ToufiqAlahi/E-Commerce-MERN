const ErrorHandler = require("../Utils/errorHandler");
const catchAsyncError = require("./catchAsyncError");
const jwt = require("jsonwebtoken");
const User = require("../models/userModels");

exports.isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;
  // console.log("Token is ========:  :  " ,token);
  if (!token) {
    return next(new ErrorHandler("Please login to access the data", 401));
  }

  const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decodedData.id);

  next();
});

exports.authorizedRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
        return next(
          new ErrorHandler(
        `Role: ${req.user.role} is not allowed to access these resources`
      , 403)
     )
    }
    next();
  };
};
