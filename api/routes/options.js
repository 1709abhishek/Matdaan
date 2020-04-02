const express = require('express');

const router = express.Router();

const optionsController = require('../controllers/optionsController');

router.post('/:id/delete', optionsController.delete);

module.exports = router;