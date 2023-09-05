// routes/productRoutes.js

const express = require('express');
const router = express.Router();
const productsController = require('../controllers/product_controller');

// Create a new product
router.post('/create', productsController.createProduct);

// List all products
router.get('/', productsController.listProducts);

// Delete a product by ID
router.delete('/:id', productsController.deleteProduct);

// Update quantity of a product by ID
router.post('/:id/update_quantity', productsController.updateProductQuantity);

module.exports = router;
