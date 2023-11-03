const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Post = require('../models/post'); // Your post schema
const Comment = require('../models/comment'); // Your comment schema

// Middleware to check if the user is authenticated
const isAuthenticated = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send('You must be logged in to perform this action');
  }
  next();
};

// POST endpoint to create a new post (any authenticated user)
router.post('/post', isAuthenticated, async (req, res) => {
  try {
    const newPost = new Post({
      title: req.body.title,
      content: req.body.content,
      createdBy: req.user._id // Assuming your user object has an _id field
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST endpoint to comment on a post (any authenticated user)
router.post('/post/:postId/comment', isAuthenticated, async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) {
      return res.status(404).send('Post not found');
    }

    const newComment = new Comment({
      text: req.body.text,
      createdBy: req.user._id // Assuming your user object has an _id field
    });

    // Here you could either push the comment ID to the post's comments array
    // or save it as a separate document, depending on your schema design
    post.comments.push(newComment);

    await post.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
