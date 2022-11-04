const ProductData = require("../models/productsModel");

// Create Product -- ADMIN
exports.createProduct = async (req, res, next) => {
  const product = await ProductData.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
};

// Get All Product

exports.getAllProducts = async (req, res) => {
  const products = await ProductData.find();
  res.status(200).json({
    success: true,
    products,
  });
};
