const ErrorHandler = require("../Utils/errorHandler");
const catchAsyncError = require("../Middleware/catchAsyncError");
const User = require("../models/userModels");
const sendToken = require("../Utils/jwtToken");
const sendEmail = require("../Utils/sendEmail");


// User Registration:
exports.createUser = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_Id: "sample ID",
      url: "Profile pic url ",
    },
  });

  sendToken(user, 201, res);
});

// User Login

exports.logInUser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    // check if both email and pass is given
    return next(
      new ErrorHandler("Please enter the email and password correctly", 400)
    );
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler(" Invalid Email or password", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler(" Invalid Email or password", 401));
  }

  sendToken(user, 200, res);
});

// Logout user

exports.logout = catchAsyncError(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged out Successfully",
  });
});

//Forgot password:
exports.forgotPassword = catchAsyncError(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new ErrorHandler("User not found!", 404));
  }

  // Get Reset password Token
  const resetToken = await user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });
  const resetPasswordUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/password/reset/${resetToken}`;

  const message = `Your password reset token is : \n \n ${resetPasswordUrl} \n \n If you haven't requested this, please ignore this. `;

    try {
        await sendEmail({
            email: user.email,
            subject: `E-commerce Password Recovery`,
            message,
            
        })

        res.status(200).json({
            success: true,
            message:`Email sent to ${user.email} successfully! `
        })
        

  } catch (error) {
    user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;
      await user.save({ validateBeforeSave: false });
      return next (new ErrorHandler (error.message, 500) )
  }
});
