const express = require('express');
const router = express.Router();
const orderCtrl = require('../controllers/order');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.post('/', ensureLoggedIn, orderCtrl.placeOrder);
router.get('/', ensureLoggedIn, orderCtrl.showOrders)

module.exports = router;