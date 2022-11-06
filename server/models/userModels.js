const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

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
  
  if (!this.isModified("password")) { // * if password isn't updated, skip hashing and go to next
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

module.exports = mongoose.model("user", userSchema);
