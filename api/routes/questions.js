const express = require('express');

const router = express.Router();

const questionsController = require('../controllers/questionsController');

router.post('/create', questionsController.create);

router.post('/:id/delete', questionsController.delete);

router.post('/:id/options/create', questionsController.createOption);

router.get('/questions/:id', questionsController.view);

module.exports = router;