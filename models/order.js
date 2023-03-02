const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// const cartSchema = new Schema({
//   item: 
//   {
//     type: Schema.Types.ObjectId,
//     ref: 'Product',
//   },
//   quantity: Number,
  
// });

const orderSchema = new Schema({
  // products: [cartSchema],
  date: {
    type: String,
    required: true,
  },
    customer: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  purchased: {
    type: Boolean,
    default: false
  }, 
    timestamps: true,
  
});

module.exports = mongoose.model('Order', orderSchema);