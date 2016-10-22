var
  mongoose = require('mongoose'),
  Quiz = require('./../../models/Quiz');

module.exports = function(router) {
  // A PUT request to /api/quizzes/:id will 
  // update a quiz based on id in url to
  // match request body
  router.put('/quizzes/:id', function (req, res) {
    Quiz.findOneAndUpdate({ id: req.params.id }, req.body, { new: true }, function (err, quiz) {
      if (err) {
        return res.send(err.message);
      }

      return res.send(quiz);
    });
  });
};