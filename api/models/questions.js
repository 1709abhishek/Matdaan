const mongoose = require('mongoose');

//defining schema
const questionSchema = new mongoose.Schema({
    
    title: {
        type: String,
        required: true,
        unique: true
    }
}, {
        timestamps: true
});

//defining variable
const Question = mongoose.model('Question', questionSchema);

//exporting module
module.exports = Question;