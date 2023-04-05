const express = require('express');
const coinController = require('../controllers/coinController');

const router = express.Router();

router.get('/', coinController.getCoins);

module.exports = router;