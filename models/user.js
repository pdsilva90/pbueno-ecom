var mongoose = require('mongoose');
var Schema = mongoose.Schema;



const UserSchema = new Schema({
  email: String,
  name: String,
  address: String,
  cart: {
    type: Array,
    ref: 'Product'
  },
  googleId: {
    type: String,
    required: true
  },
}, {
  timestamp: true
});



module.exports = mongoose.model('User', UserSchema);