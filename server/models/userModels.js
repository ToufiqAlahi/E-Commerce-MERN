const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, `Please Enter Your Name`],
    minLength: [4, `Name must be at least 4 characters`],
    maxLength: [30, `Name can not exceed 30 characters`],
  },

  email: {
    type: String,
    required: [true, `Please Enter Your Email`],
    unique: true,
    validate: [validator.isEmail, `Please Enter a Valid Email`],
  },

  password: {
    type: String,
    required: [true, `Please Enter Your Password`],
    select: false,
    minLength: [8, `Password must be at least 8 characters`],
  },

  avatar: {
    public_Id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },

  role: {
    type: String,
    default: "user",
  },

  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    // * if password isn't updated, skip hashing and go to next
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

// JWT Token

userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// Compare Password

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Generating Password Reset Token
userSchema.methods.getResetPasswordToken = function () {
  //Generate Token:
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hashing and add to userSchema 
  this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");

  this.resetPasswordExpire = Date.now() + 15 * 60 * 100; // expires in 15 mins

  return resetToken;

};

module.exports = mongoose.model("User", userSchema);
