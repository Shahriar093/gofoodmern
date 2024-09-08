const foodCategories = require("../models/Category");
const Food = require("../models/Food");

module.exports.showHome = async (req, res) => {
    try {
        let items = await Food.find();
        let categories = await foodCategories.find();
        let response = [items, categories];
        res.send(response);
    } catch (error) {
        res.send(error.messege);
    }
};