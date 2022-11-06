const ErrorHandler = require("../Utils/errorHandler");
const catchAsyncError = require("../Middleware/catchAsyncError");
const User = require("../models/userModels");


// User Registration:
exports.createUser = catchAsyncError(async (req, res, next) => {
    const { name, email, password } = req.body;
    const user = await User.create({
        name, email, password,
        avatar: {
            public_Id: "sample ID",
            url: "Profile pic url ",
        }
    });
    res.status(201).json({
        success: true,
        user,
    })
})
