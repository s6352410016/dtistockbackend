const router = require('express').Router();
const supplierController = require('../controllers/supplierController');
const productController = require('../controllers/productController');

router.get('/supplier' , supplierController.getAllSupplier);
router.get('/supplier/:id' , supplierController.getAllSupplierBySupplierId);
router.get('/product' , productController.getAllProduct);
router.get('/product/:id' , productController.getProductByProductId);

module.exports = router;