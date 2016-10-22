var
  mongoose = require('mongoose'),
  Quiz = require('./../../models/Quiz');

module.exports = function(router) {
  // A GET request to /api/quizzes/:id will 
  // get a quiz based on id in url
  router.get('/quizzes/:id', function (req, res) {
    Quiz.find({ _id: req.params.id }, function (err, quiz) {
      if (err) {
        return res.send(err.message);
      } else if (!quiz) {
        return res.send('No Quiz with id ' + req.params.id + ' was found.');
      }

      return res.send(quiz);
    });
  });
};