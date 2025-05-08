const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

router.get('/', messageController.newMessageForm);
router.post("/", messageController.creatNewMessage);


module.exports = router;