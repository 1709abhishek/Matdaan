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