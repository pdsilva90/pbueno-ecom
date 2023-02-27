var Product = require('../models/product')

module.exports = {
  index,
  // show
};

function index(req, res) {
  res.render('mens/index', { title: `Men's`});
}

// function show(req, res) {
//   Product.findById(req.params.id, function(err, product) {
//     if (err) console.error(err)
//     res.render('/mens/index', {title: 'Mens'});
//   });
// }