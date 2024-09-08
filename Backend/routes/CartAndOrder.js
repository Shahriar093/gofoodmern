const express = require('express');
const router = express.Router({ mergeParams: true });
const { addToCard, deleteCart, viewOrder } = require('../controllers/CartAndOrder');

router.post('/add', addToCard);
router.delete('/deletecart', deleteCart);
router.get('/vieworder', viewOrder);

module.exports = router;