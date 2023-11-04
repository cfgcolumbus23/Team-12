const express = require("express");
const { registerUser, loginUser,updateProgress } = require("../controllers/userController");
const router = express.Router();

// Auth Routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.patch("/updateprogress",updateProgress)
module.exports = router;
