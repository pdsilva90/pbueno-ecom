const express = require('express');
const router = express.Router();
const cartCtrl = require('../controllers/cart');
const ensureLoggedIn = require('../config/ensureLoggedIn');



router.post('/', cartCtrl.addToCart);
router.get('/', ensureLoggedIn, cartCtrl.showCart);
router.delete('/:id', ensureLoggedIn, cartCtrl.delete);
// router.post('/', cartCtrl.createOrder)

module.exports = router;