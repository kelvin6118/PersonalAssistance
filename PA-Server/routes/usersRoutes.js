const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const userController = require('../controllers/usersController');

const verifyJWT = (req, res, next) => {
    const token = req.headers[x-access-token]

    if(!token){
        res.status(401);
    } else {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) =>{
            if(err){
                res.status(401).json(err);
            }else{
                req.userid = decoded.id;
                next();
            }
        })
    }
}

router.get('/',userController.display);
router.post('/', userController.registerRequest);
router.post('/login',userController.loginRequest);

//example of JWT
router.get('/userInfo', verifyJWT, userController.getUserInfo);

module.exports = router;
