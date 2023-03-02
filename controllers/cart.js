const User = require('../models/user');
const Product = require('../models/product');
const { findById } = require('../models/user');
const { findOne } = require('../models/product');



module.exports = {
  addToCart,
  showCart, 
  delete: deleteItem
};

// function addToCart(req, res) {
//   const loggedInUser = req.user
//   loggedInUser.cart.push(req.body.productId);
//   loggedInUser.save();
//   res.redirect('/cart/index');
//   // res.send('this is the addToCart method');
// }

function showCart(req, res) {
  const loggedInUser = req.user
  const cart = loggedInUser.cart 
  for(let i = 0; i < cart.length; i ++) {
    
  }
  console.log(req.user);
    res.render('cart/index', {title: 'Cart', loggedInUser})
  }

  function addToCart (req, res) { 
    loggedInUser = req.user
    let id = req.body.productId;
    Product.findById(id, function(err, product) { 
    loggedInUser.cart.push(product);
    loggedInUser.save();
    console.log(product)
  });
  res.render('cart/index', {loggedInUser})
}

function deleteItem(req, res, next) {
  loggedInUser = req.user
    for(let i = 0; i < loggedInUser.cart.length; i++) {
      if(loggedInUser.cart[i]._id == req.params.id) {
      console.log(req.user.cart[i]);
      req.user.cart.splice(i, 1);
      req.user.save();
    }
  }
    res.redirect('/cart', { title: `Cart`});
}
//req.user represents the user currently logged in-req.params.id ref product id in cart


















// function index(req, res) {
//   Product.find({}, function(err, products) {
//     res.render('products/index', { title: 'All Products', products});
//   })
// }