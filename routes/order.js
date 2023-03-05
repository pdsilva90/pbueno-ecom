const express = require('express');
const router = express.Router();
const orderCtrl = require('../controllers/order');

router.post('/', orderCtrl.placeOrder);
router.get('/', orderCtrl.showOrders)

module.exports = router;