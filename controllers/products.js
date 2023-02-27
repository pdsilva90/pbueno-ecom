const Product = require('../models/product');
const cart = require('../models/user');

module.exports = {
  index,
  show,
  addItem,
};

function index(req, res) {
  Product.find({}, function(err, products) {
    console.log(products)
    res.render('products/show', { title: 'All Products', products});
  })
}

function show(req, res, next) {
  Product.findById(req.params.id, function (err, product) {
    if (err) return res. redirect('/');
    res.render('products/show', {title: 'Products'});
  });
}

function addItem( req, res) {
  const product = new Product(req.body);
    product.save(function(err) {
      if (err) {
        console.log(err);
        return res.redirect('/');
      };
      console.log(product);
      res.redirect('/');
    });
  }

// function show(req, res) {
//   Product.findById(req.params.id, function(err, product) {
//     res.render('/products/show', {title: 'Products'});
//   });
// }

