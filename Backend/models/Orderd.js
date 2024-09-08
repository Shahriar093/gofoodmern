const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderedSchema = new Schema({
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

const Ordered = mongoose.model('Ordered', orderedSchema);
module.exports = Ordered;