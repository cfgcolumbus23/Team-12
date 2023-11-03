const express = require("express");
const { directMessage } = require("../controllers/directMessageController");
const router = express.Router();

// Auth Routes
router.get("/message", directMessage);

module.exports = router;
