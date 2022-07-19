const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const validator = require('../routes/validator/index').validation;
const controllers = require('../controllers');

/* GET home page. */
router.get('/', controllers.showIndex);
router.get('/stores', controllers.showAllStores);
router.get('/stores/:storeId/products', controllers.getProductsByStoreId);
router.get('/orders', controllers.getAllOrders);
router.post('/orders', upload.none(), validator('submitOrder'), controllers.submitOrder)



module.exports = router;


