const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports.loginUser = async (req, res) => {
    // res.send(req.body);
    let { email, password } = req.body;
    try {
        let userData = await User.findOne({ "email": email });
        if (!userData) {
            return res.status(200).json({ success: "false" });
        }
        let passVerify = await bcrypt.compare(password, userData.password);
        if (!passVerify) {
            return res.status(200).json({ success: "false" });
        }
        const data = {
            user: {
                id: userData._id
            }
        }
        const id = userData._id;
        let authToken = jwt.sign(data, process.env.jwtSecret);
        res.status(200).json({ success: true, authToken, id });
    } catch (error) {
        res.send(error.message);
    }
};
