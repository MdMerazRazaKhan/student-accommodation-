const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

// Send OTP (email / phone)
router.post("/send-otp", authController.sendOTP);

// Verify OTP
router.post("/verify-otp", authController.verifyOTP);

module.exports = router;
