const express = require('express');
const router = express.Router();
const { valideoldUser } = require('../Middleware');
const { loginUser } = require('../controllers/LoginUser');

router.post('/login', valideoldUser, loginUser);

module.exports = router;  