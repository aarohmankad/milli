var mongoose = require('mongoose');


/**
 * QuizOptions model
 * @type {Schema}
 */
var QuizOptions = new mongoose.Schema({
  createdDate: {
    type: Date,
    default: Date.now,
  },
  id: {
    type: String,
    unique: true,
    required: true,
  },
  quizId: {
    type: String,
  },
  options: [{
    letter: String,
    value: String,
    correct: Boolean,
  }],
});

// Allow us to export model to other files (e.x. routes)
module.exports = mongoose.model('QuizOptions', QuizOptions);
