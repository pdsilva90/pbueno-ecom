
const express = require('express');
const router = express.Router();
const accountCtrl = require('../controllers/account');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/orders/account', accountCtrl.index);
router.post('/account', accountCtrl.addItem);
router.get('/:id', accountCtrl.show);
router.delete('/account/:id', accountCtrl.delete);
router.put('/account/update/:id', accountCtrl.update);
// router.post('/', ensureLoggedIn, moviesCtrl.create);

module.exports = router;