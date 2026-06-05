const express = require('express');
const DonorController = require('../Controllers/DonorController');
const controller = new DonorController();
const router = express.Router();
router.post('/', controller.add);
module.exports = router;

