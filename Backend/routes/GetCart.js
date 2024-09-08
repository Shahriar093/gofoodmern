const express = require('express');
const Cart = require('../models/Cart');
const router = express.Router({ mergeParams: true });
router.get('/', async (req, res) => {
    let { userId } = req.params;
    let userCart = await Cart.find({ userId: userId });
    res.send(userCart);
})
module.exports = router;