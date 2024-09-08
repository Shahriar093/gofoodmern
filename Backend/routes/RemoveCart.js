const express = require('express');
const router = express.Router({ mergeParams: true });
const Cart = require('../models/Cart');
router.delete('/', async (req, res) => {
    let { cartid } = req.params;
    await Cart.findByIdAndDelete(cartid);
    res.json(true);
})
module.exports = router;