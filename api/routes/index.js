const express = require('express');

const router = express.Router();

// routing to questions
router.use('/questions', require('./questions'));

// routing to options
router.use('/options', require('./options'));


module.exports = router;