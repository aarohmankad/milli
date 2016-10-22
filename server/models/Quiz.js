var mongoose = require('mongoose');
var QuizOptions = require('./QuizOptions');

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
  options: {
    type: [mongoose.Schema.ObjectId]
  }
});

// Allow us to export model to other files (e.x. routes)
module.exports = mongoose.model('Quiz', Quiz);
