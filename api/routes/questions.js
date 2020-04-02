const express = require('express');

const router = express.Router();

const questionsController = require('../controllers/questionsController');

router.post('/create', questionsController.create);

router.post('/:id/delete', questionsController.destroy);

module.exports = router;