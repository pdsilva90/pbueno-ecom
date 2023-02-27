const express = require('express');
const router = express.Router();
const cartCtrl = require('../controllers/cart');
const ensureLoggedIn = require('../config/ensureLoggedIn');

/* GET home page. */
router.get('/cart', cartCtrl.index);
router.post('/order/cart', cartCtrl.addItem);
router.delete('/cart/delete/:id', cartCtrl.delete);
router.put('/cart/update/:id', cartCtrl.update);

module.exports = router;