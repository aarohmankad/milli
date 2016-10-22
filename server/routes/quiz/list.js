var
  mongoose = require('mongoose'),
  Quiz = require('./../../models/Quiz');

module.exports = function(router) {
  // A GET request to /api/quizzes will 
  // get all quizzes
  router.get('/quizzes', function (req, res) {
    Quiz.find({}, function (err, quizzes) {
      if (err) {
        return res.send(err.message);
      }

      return res.send(quizzes);
    });
  });
};