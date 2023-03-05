const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const orderSchema = new Schema({
  products: {
    type: Array,
    ref: 'Product'
  },
  customer: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  purchased: {
    type: Boolean,
    default: false
  }}, {
    timestamps: true,
  
});

module.exports = mongoose.model('Order', orderSchema);