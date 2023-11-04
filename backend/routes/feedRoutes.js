const express = require("express");
const { post, postComment } = require("../controllers/FeedController");
const router = express.Router();

router.post("/post", post)
router.post("/postcomment",postComment)

module.exports = router