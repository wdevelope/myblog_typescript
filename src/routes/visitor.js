const express = require('express');
const router = express.Router();
const { auth, authAdmin } = require('../middlewares/auth');
const validation = require('../middlewares/validation');
const visitorController = require('../repositories/visitor');

router.get('/', visitorController.getAll);

module.exports = router;
