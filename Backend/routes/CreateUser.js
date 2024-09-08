const express = require('express');
const router = express.Router();
const { validenewUser } = require('../Middleware');
const { createUser } = require('../controllers/CreateUser');

router.post('/create', validenewUser, createUser)
module.exports = router;  