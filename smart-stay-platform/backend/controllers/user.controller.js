const User = require("../models/user.model");

exports.updateLocation = async (req, res) => {
  try {
    const { lat, lng } = req.body;

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { location: { lat, lng } },
      { new: true }
    );

    res.json({ message: "Location updated", user });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
