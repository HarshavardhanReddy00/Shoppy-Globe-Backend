const Product = require("../models/Product");

// GET /products
exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// GET /products/:id
exports.getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
};