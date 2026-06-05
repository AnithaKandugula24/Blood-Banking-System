const express = require('express');
const router = express.Router();
const ServiceController = require('../Controllers/ServiceController');

//const controller = new ServiceController();
router.get('/services', ServiceController.getData);


module.exports = router;