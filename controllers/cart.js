const User = require('../models/user');
const Product = require('../models/product');
const Order = require('../models/order');
const { findById } = require('../models/user');
const { findOne } = require('../models/product');



module.exports = {
  addToCart,
  showCart, 
  delete: deleteItem,
  placeOrder
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
    res.render('cart/index', {title: 'Cart', loggedInUser})
  }

function addToCart (req, res) { 
    loggedInUser = req.user
    let id = req.body.productId;
    Product.findById(id, function(err, product) { 
    loggedInUser.cart.push(product);
    loggedInUser.save();
  });
  res.render('cart/index', { title: 'Cart', loggedInUser})
}

function deleteItem(req, res, next) {
  loggedInUser = req.user
    for(let i = 0; i < loggedInUser.cart.length; i++) {
      if(loggedInUser.cart[i]._id == req.params.id) {
      console.log(loggedInUser.cart[i]);
      loggedInUser.cart.splice(i, 1);
      loggedInUser.save();
    };
  };
    res.redirect('/cart', 302, { title: 'Cart', loggedInUser});
}

function placeOrder (req, res ) {
  loggedInUser = req.user
  const order = new Order({
    date: order.date,
    user: order.customer,
    purchased: order.purchased,
  });
  order.save(function(err, order){
    res.send('Order Successful!')
    res.redirect('/', {loggedInUser})
  })
}









//req.user represents the user currently logged in-req.params.id ref product id in cart


















// function index(req, res) {
//   Product.find({}, function(err, products) {
//     res.render('products/index', { title: 'All Products', products});
//   })
// }