const express = require('express');
const DashboardController = require('../Controllers/DashboardController');

const router = express.Router();

router.get('/', DashboardController.getDashboardData);

module.exports = router;
