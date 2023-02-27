var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cartSchema = new Schema({
    item: String, 
    price: String,
    quantity: Number
});

var UserSchema = new Schema({
  email: String,
  name: String,
  address: String,
  googleId: {
    type: String,
    required: true
  },
  cart: {
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        quantity: { type: Number, required: true },
      },
    ],
  },
}, {
    timestamps: true,
  cart: [cartSchema]
});



module.exports = mongoose.model('User', UserSchema);