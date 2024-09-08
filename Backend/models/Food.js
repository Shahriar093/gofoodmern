const mongoose = require('mongoose');
const { Schema } = mongoose;

const foodSchema = new Schema({
    CategoryName: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    img: {
        type: String,
        require: true
    },
    options: [

    ],
    description: {
        type: String,
    }
})
const Food = mongoose.model("Food", foodSchema);
module.exports = Food;