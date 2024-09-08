const mongoose = require('mongoose');
const { Schema } = mongoose;
const categorySchema = new Schema({
    CategoryName: String
});

const foodCategories = mongoose.model('foodCategories', categorySchema);
module.exports = foodCategories;