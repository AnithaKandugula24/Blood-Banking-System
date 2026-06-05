const express = require('express');
const router = express.Router();

const ContactController = require('../Controllers/ContactController');

const controller = new ContactController();   

router.post('/', controller.add);            
module.exports = router;