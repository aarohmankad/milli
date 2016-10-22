
  mongoose = require('mongoose'),
  Quiz = require('./../../models/Quiz');

module.exports = function(router) {
  // A POST request to /api/quizzes will 
  // create a quiz based on request body
  router.post('/quizzes', function (req, res) {
    Quiz.create(req.body, function (err, quiz) {
      if (err) {
        return res.send(err);
      }

      return res.send(quiz);
    });
  });
};