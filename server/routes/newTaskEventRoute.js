const express = require('express');
const router = express.Router();
const verifyJWT = require('./verifyJWT')

const newTaskEventController = require('../controllers/newTaskEventController');


router.post('/', newTaskEventController.createRequest);



module.exports = router;
