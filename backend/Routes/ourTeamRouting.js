const express = require('express');
const OurTeamsController = require('../Controllers/OurTeamsController');

const router = express.Router();

router.get('/get-team', OurTeamsController.getTeam);

module.exports = router;    