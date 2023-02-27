var express = require('express');
var router = express.Router();
const productsCtrl = require('../controllers/products');
const product = require('../models/product');

/* GET users listing. */
router.get('/', productsCtrl.index);

router.get('/:id', productsCtrl.addItem);

router.get('/products', productsCtrl.show);



module.exports = router;
