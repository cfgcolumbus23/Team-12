// models/post.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  //createdBy: {
  //  type: mongoose.Schema.Types.ObjectId,
  //  ref: 'User',
  //  required: true
  //},
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }]
});

module.exports = mongoose.model('Post', postSchema);