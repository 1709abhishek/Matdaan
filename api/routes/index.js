const express = require('express');

const router = express.Router();

// routing to doctors
router.use('/questions', require('./questions'));

// routing to patients
router.use('/options', require('./options'));


module.exports = router;