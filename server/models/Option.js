var mongoose = require('mongoose');

/**
 * Option model
 * @type {Schema}
 */
var Option = new mongoose.Schema({
  createdDate: {
    type: Date,
    default: Date.now,
  },
  option: String,
  answer: Boolean,
});

// Allow us to export model to other files (e.x. routes)
module.exports = {
	model: mongoose.model('Option', Option),
	schema: Option,
};
