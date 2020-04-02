const Question = require('../models/questions');
const Option = require('../models/options');

// creating a question
module.exports.create = async function(req,res){
    try {
        var new_question = await new Question(req.body);
        let question = await new_question.save();
        return res.json(200,{
            message: "question created successfully",
            question: question
        });
    } catch (err) {
        console.log('********',err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}

module.exports.delete = function(req, res) {
    Option.deleteMany({question: req.params.id})
    Question.remove({
      _id: req.params.id
    }, function(err, question) {
      if (err)
        return res.send(err);
      return res.json({ message: 'question successfully deleted' });
    });
};

module.exports.view = function(req,res){

    Question.find({})
    .populate('Option')
.exec(function(err, question){

    if (err){
        console.log(err);
    }
        console.log(question);
        return res.json(200,{
            message: "Question showing with options successfully",
            question: question
        });
});
}

// create options for a question
module.exports.createOption = async function(req,res){
    try {
        var new_option = await new Option(req.body);
        new_option.question = req.params.id
        new_option.link_to_vote = "http://localhost:3000/options/:id/add_vote"
        let option = await new_option.save();
        return res.json(200,{
            message: "option created successfully",
            option: option
        });
    } catch (err) {
        console.log('********',err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}



