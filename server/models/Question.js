var mongoose = require('mongoose');
var Option = require('./Option');

/**
 * Question model
 * @type {Schema}
 */
var Question = new mongoose.Schema({
  createdDate: {
    type: Date,
    default: Date.now,
  },
  question: {
    type: String,
    required: true,
  },
  options: [Option.schema],
});

// Allow us to export model to other files (e.x. routes)
module.exports = {
	model: mongoose.model('Question', Question),
	schema: Question,
};
