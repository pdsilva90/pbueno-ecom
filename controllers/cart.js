const User = require('../models/user');
const Product = require('../models/product');

module.exports = {
    index,
    cart, 
    addItem,
    delete: deleteOne,
    update
  };
  
  function index(req, res) {
      res.render('/cart', { title: `Cart`});
  }

  function cart(req, res) {
    res.render('orders/cart', {
      user: req.user
    });
  }

  function addItem(req, res) {
    User.findById(req.user._id)
    .then(user =>{
      user.cart.push(req.body)
      user.save(()=>{
        console.log(req.body);
        console.log(user);
        res.redirect('/orders/cart')
      })
    })
  }

  function deleteOne(req, res) {
    User.findById(req.user.id)
    .then(person => {
      person.cart.remove(req.params.id)
      person.save(()=>{
        res.redirect('/orders/cart')
      })
    })
  }

  function update(req, res) {
    User.findById(req.user.id)
    .then(person => {
      console.log(person)
      let qty = person.cart.id(req.params.id)
      qty.quantity = req.body.quantity
      person.save(() => {
      res.redirect('/orders/cart')
      })
    })
  }