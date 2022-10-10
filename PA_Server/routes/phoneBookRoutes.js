const express = require('express');
const router = express.Router();
const verifyJWT = require('./verifyJWT')

const phoneBookController = require('../controllers/phoneBookController');

router.post('/', phoneBookController.createRequest);
router.get('/:id', phoneBookController.getContacts);

module.exports = router;
