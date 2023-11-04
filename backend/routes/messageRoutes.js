const express = require("express");

const {
  directMessage,
  sendMessage,
} = require("../controllers/messageController");
const router = express.Router();

// Routes for messages
//get route to get the messages between two users
router.get("/message_receive", directMessage);
//post route to send the message between two people
router.post("/send", sendMessage);
module.exports = router;
