const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController')

// route to get all product, then controller get called
router.get("/", productController.getProducts);

//route to create new product ,then createproduct get called
router.post("/create", productController.createProduct);

//route to delete the product 
router.delete("/:id", productController.deleteProduct);

// route to update the product
router.post("/:id/update_quantity", productController.updateQuantity);

module.exports = router;