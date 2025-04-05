const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  question: String,
  options: [String],
  answer: String
});

module.exports = mongoose.model('Assignment', assignmentSchema);
