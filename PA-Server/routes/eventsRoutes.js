const express = require('express');
const router = express.Router();
const verifyJWT = require('./verifyJWT')

const eventController = require('../controllers/eventsController');


router.get('/:id', eventController.getEvents);



module.exports = router;
