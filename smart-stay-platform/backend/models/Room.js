const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  buildingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Building"
  },

  type: {
    type: String,
    enum: ["1BHK", "2BHK", "3BHK"]
  },

  price: Number,

  facilities: {
    washingMachine: Boolean,
    fridge: Boolean,
    ac: Boolean
  },

  available: { type: Boolean, default: true }
});

module.exports = mongoose.model("Room", roomSchema);
