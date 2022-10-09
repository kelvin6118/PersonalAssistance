const User = require('../models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function display(req, res) {
    try {
        const users = await User.all;
        res.status(200).send(users);
    } catch (err) {
        res.status(500).json({err});
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
        res.status(201).send(user)
    } catch (err) {
        res.status(422).json({message: "unable to register"})
    }
}

async function loginRequest(req, res) {
    try {
        const user = await User.findByUser(req.body.username);
        if(!user){ throw new Error('User could not be authenticated')};
        const authed = await bcrypt.compare(req.body.password, user.password)

        if (!!authed){
            const id = user.userid;
            const secret = process.env.JWT_SECRET;
            const token = jwt.sign({id}, secret, {
                expiresIn: 300,
            })

            res.status(200).send({
                auth: true,
                token: token,
                userid: user.userid,
                username: user.username,
                email: user.email
            })

        } else {
            throw new Error('User could not be authenticated')
        }

    } catch (err) {
            res.status(401).json({auth: false, message: "User could not be authenticated"})
        }
}

async function getUserInfo(req, res){
    res.status(200);
}

module.exports = { display, registerRequest ,loginRequest, getUserInfo};
