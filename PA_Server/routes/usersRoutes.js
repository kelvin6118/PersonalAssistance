const express = require('express');
const router = express.Router();
const verifyJWT = require('./verifyJWT')

const userController = require('../controllers/usersController');



router.get('/',userController.display);
router.post('/', userController.registerRequest);
router.post('/login',userController.loginRequest);



module.exports = router;
