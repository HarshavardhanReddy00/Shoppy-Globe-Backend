const Cart = require("../models/Cart");
const Product = require("../models/Product");

// POST /cart
exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  const product = await Product.findById(productId);
  if (!product) {
    return res.status(404).json({ message: "Invalid product" });
  }

  const cartItem = await Cart.create({
    user: req.user.id,
    product: productId,
    quantity
  });

  res.status(201).json(cartItem);
};

// PUT /cart/:id
exports.updateCart = async (req, res) => {
  const cart = await Cart.findById(req.params.id);

  if (!cart) {
    return res.status(404).json({ message: "Cart item not found" });
  }

  cart.quantity = req.body.quantity;
  await cart.save();

  res.json(cart);
};

// DELETE /cart/:id
exports.deleteCart = async (req, res) => {
  const cart = await Cart.findById(req.params.id);

  if (!cart) {
    return res.status(404).json({ message: "Cart item not found" });
  }

  await cart.deleteOne();
  res.json({ message: "Item removed" });
};