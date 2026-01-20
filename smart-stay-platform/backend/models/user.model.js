const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // BASIC AUTH
  phone: { type: String, unique: true, required: true },
  email: { type: String },
  name: { type: String },

  // OTP AUTH
  otp: { type: String },
  otpExpiry: { type: Date },

  // ROLE & STATUS
  role: { type: String, default: "student" },
  isVerified: { type: Boolean, default: false },

  // LOCATION (for building selection)
  location: {
    lat: { type: Number },
    lng: { type: Number }
  }

}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
