const express = require("express");

const {
  directMessage,
  sendMessage,
} = require("../controllers/messageController");
const router = express.Router();

// Routes for messages
router.get("/message_receive", directMessage);
router.post("/send", sendMessage);
module.exports = router;
