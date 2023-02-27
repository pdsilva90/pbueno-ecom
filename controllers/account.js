

module.exports = {
  index,
  show,
  addItem,
  delete: deleteOne,
  update
}

function index(req, res) {
    res.render('orders/account', {title: 'Account Page'});
}

function update(req, res) {
  User.findById(req.user.id)
  .then(person => {
    console.log(person)
    let qty = person.cart.id(req.params.id)
    qty.quantity = req.body.quantity
    person.save(() => {
    res.redirect('/orders/account')
    })
  })
}

function deleteOne(req, res) {
  Product.findById(req.user.id)
  .then(product => {
    product.cart.remove(req.params.id)
    product.save(()=>{
      res.redirect('/orders/account')
    })
  })
}

function addItem(req, res) {
  const product = new Product(req.body);
  // Assign the logged in user's id
  product.userRecommending = req.user._id;
  product.save(function(err) {
    if (err) return return res.redirect('/order/account');
    // Probably want to go to newly added book's show view
    res.redirect(/orders/account);
  });
}





function show(req, res) {
  res.render('/orders/account', {
    user: req.user
  });
}