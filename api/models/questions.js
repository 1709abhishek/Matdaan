const mongoose = require('mongoose');

//defining schema
const questionSchema = new mongoose.Schema({
    
    title: {
        type: String,
        required: true,
        unique: true
    },
    // include the array of ids of all options in this questionSchema itself
    options: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Option'
        }
    ]
}, {
        timestamps: true
});

//defining variable
const Question = mongoose.model('Question', questionSchema);

//exporting module
module.exports = Question;