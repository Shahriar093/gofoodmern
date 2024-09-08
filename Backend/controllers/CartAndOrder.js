const Cart = require("../models/Cart");
const Ordered = require("../models/Orderd");
const User = require("../models/User");

module.exports.addToCard = async (req, res) => {
    let { userId } = req.params;
    let { id, name, qty, size, finalPrice } = req.body;
    let userExistance = await User.findById(userId);
    if (!userExistance) {
        return res.json({ success: false });
    }

    let userCart = await Cart.findOne({ $and: [{ userId: userId }, { item: id }, { size: size }] });
    if (userCart === null) {
        let newCart = new Cart({
            userId: userId,
            item: id,
            name: name,
            quantity: qty,
            size: size,
            price: finalPrice
        })

        await newCart.save();
        // console.log(' adding done');
        res.json({ success: true });
    }
    else {
        await Cart.findOneAndUpdate({ $and: [{ userId: userId }, { item: id }, { size: size }] }, { $inc: { quantity: qty, price: finalPrice } });
        // console.log('update done');
        res.json({ success: true });
    }

};

module.exports.deleteCart = async (req, res) => {
    let { userId } = req.params;
    let carts = await Cart.find({ userId: userId });
    await Ordered.insertMany(carts);
    await Cart.deleteMany({});
    res.json({ success: true });
};

module.exports.viewOrder = async (req, res) => {
    let { userId } = req.params;
    let items = await Ordered.find({ userId: userId });
    res.send(items);
};