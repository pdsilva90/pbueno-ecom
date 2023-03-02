var Product = require('../models/product')

module.exports = {
  index,
  show,
 
};

function index(req, res) {
  Product.find({ department: 'Kids'}, function(err, products) {
    res.render('kids/index', { title: `Kids` });
});
}

function show(req, res) {
  Product.findById(req.params.id, function(err, product) {
    if (err) console.error(err)
    res.render('/kids', {title: 'Kids'});
  });
}



