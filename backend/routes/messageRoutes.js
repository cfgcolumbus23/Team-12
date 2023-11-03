const express = require("express");
const {
  directMessage,
  sendMessage,
} = require("../controllers/messageController");
const router = express.Router();

// Routes for messages
router.get("/message", directMessage);
router.post("/send", sendMessage);
module.exports = router;
