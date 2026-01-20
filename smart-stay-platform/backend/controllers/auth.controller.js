const User = require("../models/user.model.js");
const OTP = require("../models/otp.model.js");
const sendOtp = require("../utils/sendOtp.js");
const generateToken = require("../utils/generateToken.js");

exports.sendOTP = async (req, res) => {
  const { phone } = req.body;

  const otp = Math.floor(100000 + Math.random() * 900000);
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

  await OTP.create({ phone, otp, expiresAt });
  await sendOtp(phone, otp);

  res.json({ message: "OTP sent successfully" });
};

exports.verifyOTP = async (req, res) => {
  const { phone, otp } = req.body;

  const validOtp = await OTP.findOne({ phone, otp });
  if (!validOtp) return res.status(400).json({ message: "Invalid OTP" });

  let user = await User.findOne({ phone });
  if (!user) user = await User.create({ phone, isVerified: true });

  const token = generateToken(user._id);
  await OTP.deleteMany({ phone });

  res.json({
    message: "Login successful",
    token,
    user
  });
};
