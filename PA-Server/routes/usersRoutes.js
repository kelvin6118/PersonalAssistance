const express = require('express');
const router = express.Router();

const userController = require('../controllers/usersController');

router.get('/',userController.display);
router.post('/', userController.registerRequest);

module.exports = router;
