const express = require('express');

const router = express.Router();

const optionsController = require('../controllers/optionsController');

router.post('/:id/delete', optionsController.delete);

router.post('/:id/add_vote', optionsController.update);

module.exports = router;