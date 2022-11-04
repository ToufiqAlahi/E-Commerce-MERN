const ProductData = require("../models/productsModel");
const ErrorHandler = require("../Utils/errorHandler");
const catchAsyncError = require("../Middleware/catchAsyncError");

// Create Product -- ADMIN
exports.createProduct = catchAsyncError(async (req, res, next) => {
  const product = await ProductData.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});

// Get All Product

exports.getAllProducts = catchAsyncError(async (req, res) => {
  const products = await ProductData.find();
  res.status(200).json({
    success: true,
    products,
  });
});

// Get a specific product Details
exports.getProductDetails = catchAsyncError(async (req, res, next) => {
  const product = await ProductData.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product Not found", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

// Update a specific product -- ADMIN
exports.updateProduct = catchAsyncError(async (req, res, next) => {
  let product = await ProductData.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product Not found", 500));
  }

  product = await ProductData.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    product,
  });
});

// Remove a specific product -- ADMIN

exports.removeProduct = catchAsyncError(async (req, res, next) => {
  const product = await ProductData.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product Not found", 500));
  }

  await product.remove();
  res.status(200).json({
    success: true,
    message: "Product Removed Successfully",
  });
});
