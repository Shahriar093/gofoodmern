const mongoose = require('mongoose');
const { initdata, initCategory } = require('./data');
const Food = require('../models/Food');
const User = require('../models/User');
const foodCategories = require('../models/Category');
main().then(() => console.log("DB Connected"))
    .catch((error) => {
        console.log(error);
    })
async function main() {
    await mongoose.connect('mongodb+srv://gofoodmern:OajN2Q9gcLwjUeUD@cluster0.hpovj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
}

const initDB = async () => {
    await User.deleteMany({});
    await Food.deleteMany({});
    await foodCategories.deleteMany({});
    await Food.insertMany(initdata);
    await foodCategories.insertMany(initCategory)
    console.log("DB initialised");
}
initDB();