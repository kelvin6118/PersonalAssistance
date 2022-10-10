const express = require('express');
const router = express.Router();
const verifyJWT = require('./verifyJWT')

const taskController = require('../controllers/tasksController');


router.get('/:id', taskController.getTasks);


module.exports = router;
