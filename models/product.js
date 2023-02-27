var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    department: {
      type: String,
      enum: ['Womens', 'Kids', 'Mens', 'All'],
      default: 'All',
      required: true
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      min: 5,
      max: 150
    },
    quantity: {
      type: Number,
      default: 1
    },
    imageUrl: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  });
  
  module.exports = mongoose.model('Product', productSchema);
  