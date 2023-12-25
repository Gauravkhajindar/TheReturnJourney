const express = require('express');
const router = express.Router();
const productController =require("../controller/productController")
const mw = require("../middleware/middleware")



router.post('/api/products',mw.middleware , productController.createProduct)
router.get('/api/products',mw.middleware, productController.getAllProduct)
router.get('/api/products/:id',mw.middleware, productController.getProductById)
router.put('/api/products/:id',mw.middleware, productController.updateProductById)
router.delete('/api/products/:id',mw.middleware, productController.deleteProductById)




module.exports = router;