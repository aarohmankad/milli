var
  mongoose = require('mongoose'),
  Quiz = require('./../../models/Quiz');

module.exports = function(router) {
  // A DELETE request to /api/quizzes/:id will 
  // delete a quiz based on id in the url
  router.delete('/quizzes/:id', function (req, res) {
    Quiz.remove({ id: req.params.id }, function (err, numAffected) {
      if (err) {
        return res.send(err.message);
      }

      return res.send(numAffected);
    });
  });
};