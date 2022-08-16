const express = require("express");
const router = express.Router();

// controllers
const { signup, login } = require("../controllers/userControllers");

// signup
router.post("/signup", signup);

// login
router.post("/login", login);

module.exports = router;
