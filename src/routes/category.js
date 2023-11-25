const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth');
const validation = require('../middlewares/validation');
const categoryController = require('../repositories/category');

router.get('/', categoryController.getAll);

module.exports = router;
