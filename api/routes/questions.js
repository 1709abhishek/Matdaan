const express = require('express');

const router = express.Router();

const questionsController = require('../controllers/questionsController');

//router to create a question
router.post('/create', questionsController.create);

//router to delete the question with id
router.delete('/:id/delete', questionsController.delete);

//router to create option tagging with the question
router.post('/:id/options/create', questionsController.createOption);

//router to show all the questions with present options
router.post('/:id', questionsController.view);

module.exports = router;