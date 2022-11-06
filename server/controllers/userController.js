const ErrorHandler = require("../Utils/errorHandler");
const catchAsyncError = require("../Middleware/catchAsyncError");
const user = require("../models/userModels");


// User Registration:
exports.createUser = catchAsyncError(async (req, res, next) => {
    
})
