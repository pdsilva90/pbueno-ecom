

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
  Product.findOneAndDelete(
    // Ensue that the book was created by the logged in user
    {_id: req.params.id, userRecommending: req.user._id}, function(err) {
      res.redirect('/account');
    }
  );
}

function addItem(req, res) {
  const product = new Product(req.body);
  // Assign the logged in user's id
  product.userRecommending = req.user._id;
  product.save(function(err) {
    if (err) return res.redirect('/order/account');
    res.redirect(/orders/account);
  });
}





function show(req, res) {
  res.render('/orders/account', {
    user: req.user
  });
}