var mongoose = require('mongoose');
var Question = require('./Question');

/**
 * Quiz model
 * @type {Schema}
 */
var Quiz = new mongoose.Schema({
  createdDate: {
    type: Date,
    default: Date.now,
  },
  name: {
    type: String,
    unique: true,
    required: true,
  },
  questions: [Question.schema],
});

// Allow us to export model to other files (e.x. routes)
module.exports = mongoose.model('Quiz', Quiz);
