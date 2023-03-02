var Product = require('../models/product')

module.exports = {
  index,
 
};

function index(req, res) {
  res.render('mens/index', { title: `Men's`});
}

