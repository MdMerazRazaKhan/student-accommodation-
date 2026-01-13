const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
  phone: String,
  otp: String,
  expiresAt: Date
});

// Auto delete OTP after expiry
otpSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

module.exports = mongoose.model("OTP", otpSchema);
