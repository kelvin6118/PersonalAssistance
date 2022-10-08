const User = require('../models/Users');
const bcrypt = require('bcrypt');

async function display(req, res) {
    try {
        const users = await User.all;
        res.status(200).json(users);
    } catch (err) {
        res.status(500).send(err);
    }
}

async function registerRequest(req, res){
    try {
        console.log(req.body);
        const salt = await bcrypt.genSalt();
        const hashed = await bcrypt.hash(req.body.password, salt)
        const user = await User.create({
            username: req.body.username,
            password: hashed,
            email: req.body.email
        });
        res.status(201).json(user)
    } catch (err) {
        res.status(422).json({err})
    }
}

module.exports = { display, registerRequest };
