const express = require("express");
const { registerUser } = require("../controllers/userController");
const router = express.Router();

// Auth Routes
router.get("/register", registerUser);

module.exports = router;
