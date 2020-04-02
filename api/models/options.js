const mongoose = require('mongoose');

//defining schema
const optionSchema = new mongoose.Schema({
    
    text: {
        type: String,
        required: true,
    },
    votes: {
        type: Number,
    },
    link_to_vote: {
        type: String
    },
    question:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }
}, {
        timestamps: true
});

//defining variable
const Option = mongoose.model('Option', optionSchema);

//exporting module
module.exports = Option;