const Option = require('../models/options');


//controller function for deleting the option
module.exports.delete = function(req, res) {

    Option.remove({
      _id: req.params.id
    }, function(err, question) {
      if (err)
        return res.send(err);
      return res.json({ message: 'option successfully deleted' });
    });
};

//controller function for updating the options
module.exports.update = function(req, res, query) {
    Option.findOneAndUpdate({_id: req.params.id}, {new: true}, function(err, option) {
        // Product found. Update  the quantity.
        option.votes = Number(option.votes) + 1;
        option.save(function (error, option) {
            if (error) {
              console.log(error);
            //   return res.send('Device update failed', error);
            }
            console.log('save was successful ? => \n', option);
          });
      if (err)
        res.send(err);
        return res.json(200,{
            message: "option updated successfully",
            option: option
        });
    });
  };