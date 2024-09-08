const mongoose = require('mongoose');
const { Schema } = mongoose;

const cartSchema = new Schema({
    userId: {
        type: String,
        require: true
    },
    item: {
        type: String,
        require: true
    },
    name: {
        type: String
    },
    quantity: {
        type: Number
    },
    size: {
        type: String
    },
    price: {
        type: Number
    }
})

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;