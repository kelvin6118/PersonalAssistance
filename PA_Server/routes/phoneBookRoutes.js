const express = require('express');
const router = express.Router();
const verifyJWT = require('./verifyJWT')

const phoneBookController = require('../controllers/phoneBookController');

router.post('/', verifyJWT, phoneBookController.createRequest);
router.get('/:id', verifyJWT, phoneBookController.getContacts);

module.exports = router;
