var express = require('express');
var router = express.Router();
const productsCtrl = require('../controllers/products');
const product = require('../models/product');

/* GET users listing. */
router.get('/', productsCtrl.index);

router.post('/', productsCtrl.addToCart);

// router.get('/:id', productsCtrl.show);

// router.get('/products', productsCtrl.show);
// router.get('/orders', productsCtrl.placeOrder);


module.exports = router;
