const express = require("express");
const { signup, signin } = require("../controllers/authController.js");
const { userVerification } = require("../Middlewares/AuthMiddleware.js");
const router = express.Router();

router.post("/", userVerification);
router.post("/signup", signup);
router.post("/signin", signin);

module.exports = router;
