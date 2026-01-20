const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/auth.middleware");
const { updateLocation } = require("../controllers/user.controller");

// Update user location
router.post("/location", authMiddleware, updateLocation);

module.exports = router;
