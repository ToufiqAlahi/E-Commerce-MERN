const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, `please Enter the Product Name`],
    trim: true,
  },

  description: {
    type: String,
    required: [true, `please Enter the Product Description`],
  },
  price: {
    type: Number,
    required: [true, `please Enter the Product Price`],
    maxLength: [8, `Price can not exceed 8 characters`],
  },

  images: [
    {
      public_Id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, `Please enter product Category`],
    default: " ",
  },
  stock: {
    type: Number,
    required: [true, `Please Enter the Product Stock`],
    default: 1,
    maxLength: [4, `Stock can not exceed 4 characters`],
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },

  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
