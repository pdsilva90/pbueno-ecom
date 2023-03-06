require('dotenv').config();
require('./config/database');
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);
const Product = require('./models/product');

// const data = require('./data');



  
  const product = [
    { name: 'Adidas Shirt', department: 'Mens', description: 'short sleeve', price: '50', imageUrl: 'https://i.ebayimg.com/images/g/c1IAAOSwoRRfIG9c/s-l500.jpg' },
    { name: 'Adidas Tracksuit', department: 'Kids', description: 'toddle tracksuit', price: '50', imageUrl: 'https://i.pinimg.com/564x/a5/61/a6/a561a6acd2c40705de9b9cc9f07e801d.jpg' },
    { name: 'Adidas Shirt', department: 'Womens', description: 'short sleeve', price: '50', imageUrl: 'https://m.media-amazon.com/images/I/51f-uFXxlWS._AC_SX522_.jpg' },
  ];
  
  // Seed the data
  async function seed() {
    await Product.deleteMany({});
    await Product.insertMany(product);
    process.exit()
    console.log('Data seeded!');
  }
  
  seed();