const mongoose = require("mongoose");

const internshipSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  domain: String,
  durationMonths: Number,

  status: {
    type: String,
    enum: ["applied", "approved", "completed"],
    default: "applied"
  }
}, { timestamps: true });

module.exports = mongoose.model("Internship", internshipSchema);
