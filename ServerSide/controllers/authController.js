const User = require("../models/user");
const bcrypt = require("bcrypt");
const { createSecretToken } = require("../jwt/SecretToken");

const signup = async (req, res) => {
  try {
    const { name, email, password, confirmPassword, createdAt } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      createdAt,
    });
    const existingUser = await User.findOne({ email });

    // Check if the password and confirm password match
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ error: "Password and confirm password do not match" });
    }

    // Check if the email is already registered

    if (existingUser) {
      return res
        .status(400)
        .json({ error: "This email is already registered" });
    }

    await newUser.save();
    res.status(201).json({ message: "User signed up successfully!" });
  } catch (error) {
    res.status(400).json({ error: "Failed to sign up user" });
  }
};

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    console.log(email, password);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }

    res.status(200).json({ message: "User logged in successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to log in user" });
  }
};

module.exports = {
  signup,
  signin,
};
