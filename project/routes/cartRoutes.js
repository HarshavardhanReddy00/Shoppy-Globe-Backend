const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const { addToCart, updateCart, deleteCart } = require("../controllers/cartController");

router.post("/", protect, addToCart);
router.put("/:id", protect, updateCart);
router.delete("/:id", protect, deleteCart);

module.exports = router;