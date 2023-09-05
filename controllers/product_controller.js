// controllers/productsController.js

const Product = require('../models/product');

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const product = new Product({ name, quantity });
    const savedProduct = await product.save();
    res.json({ product: savedProduct });
  } catch (error) {
    res.status(500).json({ error: 'Could not create product' });
  }
};

// List all products
exports.listProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ products });
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve products' });
  }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndRemove(req.params.id);
    res.json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Could not delete product' });
  }
};

// Update quantity of a product by ID
exports.updateProductQuantity = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const { number } = req.query;
    const updatedQuantity = parseInt(product.quantity) + parseInt(number);
    product.quantity = updatedQuantity;

    await product.save();
    res.json({ product, message: 'Updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Could not update product quantity' });
  }
};
