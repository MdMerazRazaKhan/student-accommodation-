// TEMP / BASIC controller (to remove error)

exports.createBooking = (req, res) => {
  res.json({ message: "Booking created (dummy)" });
};

exports.getBookings = (req, res) => {
  res.json({ message: "Bookings fetched (dummy)" });
};
