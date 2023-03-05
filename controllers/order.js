const User = require('../models/user');
const Product = require('../models/product');
const Order = require('../models/order');
const { findById } = require('../models/user');
const { findOne } = require('../models/product');



module.exports = {
    placeOrder,
    showOrders
}

function placeOrder(req, res) {
    const loggedInUser = req.user
    const orderToPlace = {
        products: loggedInUser.cart,
        customer: loggedInUser._id
    } 
    // console.log(orderToPlace)
    Order.create(orderToPlace, function(err, order){
        if (err) return res.redirect('/cart');
        loggedInUser.cart = [];
        loggedInUser.save();
        res.redirect('/order')
    });
}

async function showOrders(req, res) {
    const loggedInUser = req.user
    let orders = await Order.find({customer: loggedInUser._id})
    .populate('customer')
    // .populate('products')
    .exec()
        // if (err) return res.redirect('/cart');
        console.log(orders[0].products[0].name)
        res.render('order/index', {title: 'Order Details', orders});
}