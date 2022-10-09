const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const verifyJWT = require('./verifyJWT')

const userController = require('../controllers/usersController');



router.get('/',userController.display);
router.post('/', userController.registerRequest);
router.post('/login',userController.loginRequest);

//example of JWT
router.get('/userInfo', verifyJWT, userController.getUserInfo);

module.exports = router;
