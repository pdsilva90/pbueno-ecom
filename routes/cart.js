const express = require('express');
const router = express.Router();
const cartCtrl = require('../controllers/cart');



router.post('/', cartCtrl.addToCart);
router.get('/', cartCtrl.showCart);
router.delete('/:id', cartCtrl.delete);
router.get('/orders', cartCtrl.placeOrder)

module.exports = router;