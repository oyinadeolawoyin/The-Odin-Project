const express = require('express');
const router = express.Router();
const messageDetailController = require('../controllers/messageDetailsController');

router.get('/messageDetail/:id', messageDetailController.messageDetails);

module.exports = router;