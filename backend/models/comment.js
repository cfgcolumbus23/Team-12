// models/comment.js
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: String,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

module.exports = mongoose.model('Comment', commentSchema);