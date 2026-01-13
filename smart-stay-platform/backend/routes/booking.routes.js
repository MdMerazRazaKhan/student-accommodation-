const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/booking.controller");
const auth = require("../middlewares/auth.middleware");

// Protected route: only logged-in users can book
router.post("/book", auth, bookingController.bookRoom);

module.exports = router;
