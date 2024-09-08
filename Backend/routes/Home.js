const express = require('express');
const router = express.Router();
const { showHome } = require('../controllers/ShowHome.js');

router.get('/', showHome);

module.exports = router;