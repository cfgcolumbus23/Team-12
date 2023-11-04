const express = require("express");
const { post, postComment,getPosts } = require("../controllers/FeedController");
const router = express.Router();

router.post("/post", post)
router.post("/postcomment",postComment)
router.get("/getposts",getPosts)


module.exports = router