var Product = require('../models/product')

module.exports = {
  show,
  index,
};



function show(req, res) {
  Product.findById(req.params.id, function(err, product) {
    res.render('womens/show', {
      title: 'Product Detail',
      product
    });
  });
}

function index(req, res) {
  Product.find({ product: 'Womens'}, function(err, products) {
    res.render('womens/index', { title: `Women's`});
  })
  
}

