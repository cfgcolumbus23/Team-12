const express = require("express");
const {
  directMessage,
  sendMessage,
} = require("../controllers/messageController");
const router = express.Router();

// Auth Routes
// router.get("/message", getMessage);
router.get("/message", directMessage);
router.post("/send", sendMessage);
module.exports = router;
