const express = require('express');
const router = express.Router();
const verifyJWT = require('./verifyJWT')

const taskController = require('../controllers/tasksController');


router.get('/:id', verifyJWT ,taskController.getTasks);


module.exports = router;
