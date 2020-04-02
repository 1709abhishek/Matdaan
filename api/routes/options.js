const express = require('express');

const router = express.Router();

const optionsController = require('../controllers/optionsController');

//router to delete the option with given id
router.delete('/:id/delete', optionsController.delete);

//router to add_vote by 1 to given option id
router.post('/:id/add_vote', optionsController.update);

module.exports = router;