const express = require('express');
const router = express.Router();
const verifyJWT = require('./verifyJWT')

const newTaskEventController = require('../controllers/newTaskEventController');


router.post('/', verifyJWT, newTaskEventController.createRequest);



module.exports = router;
