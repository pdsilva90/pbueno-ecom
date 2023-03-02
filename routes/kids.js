const express = require('express');
const router = express.Router();
const kidsCtrl = require('../controllers/kids');
// const ensureLoggedIn = require('../config/ensureLoggedIn');

/* GET home page. */
router.get('/', kidsCtrl.index);

router.get('/:id', kidsCtrl.show);



module.exports = router;