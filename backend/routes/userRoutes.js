const express = require("express");
const { registerUser } = require("../controllers/userController");
const router = express.Router();

// Auth Routes
router.post('/register', registerUser);

module.exports = router;