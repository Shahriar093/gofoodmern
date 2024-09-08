const User = require("../models/User");
const bcrypt = require('bcryptjs');

module.exports.createUser = async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    let setPassword = await bcrypt.hash(req.body.password, salt);
    // res.send(req.body);
    try {
        let newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: setPassword
        });
        await newUser.save().then(res.json({ sucess: true }));
    } catch (error) {
        console.log('error in schema');
        res.json({ sucess: false });
    }
};