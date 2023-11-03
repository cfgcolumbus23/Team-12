const express = require("express");
const { registerUser } = require("../controllers/authController");
const router = express.Router();

// Auth Routes
router.get('/register', registerUser);

module.exports = router;