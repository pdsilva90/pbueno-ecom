const Product = require('../models/product');
const cart = require('../models/user');

module.exports = {
  index,
  addToCart,

};


function index(req, res) {
  Product.find({}, function(err, products) {
    res.render('products/index', { title: 'All Products', products});
  })
}
function addToCart(req, res) {
  const loggedInUser = req.user
  loggedInUser.cart.push(req.params.id);
  loggedInUser.save();
  // res.redirect('/cart')
  res.send('this is the addToCart method');
}



