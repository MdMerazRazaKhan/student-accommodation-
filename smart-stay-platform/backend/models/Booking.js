const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  roomId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room"
  },

  startDate: Date,
  endDate: Date,

  status: {
    type: String,
    enum: ["active", "completed", "cancelled"],
    default: "active"
  }
}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);
