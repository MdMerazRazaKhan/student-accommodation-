const mongoose = require("mongoose");

const canteenOrderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  items: [
    {
      name: String,
      quantity: Number,
      price: Number
    }
  ],

  totalAmount: Number,

  status: {
    type: String,
    enum: ["ordered", "preparing", "delivered"],
    default: "ordered"
  }
}, { timestamps: true });

module.exports = mongoose.model("CanteenOrder", canteenOrderSchema);
