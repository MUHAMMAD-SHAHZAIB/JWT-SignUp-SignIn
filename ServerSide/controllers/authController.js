const User = require("../models/user");
const bcrypt = require("bcrypt");
const { createSecretToken } = require("../jwt/SecretToken");

const signup = async (req, res, next) => {
  try {
    const { name, email, password, confirmPassword, createdAt } = req.body;
    if (!email || !password || !username || !confirmPassword) {
      return res.json({ message: "All fields are required" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
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

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      createdAt,
    });

    await newUser.save();

    const token = createSecretToken(newUser._id);
    console.log(token);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    res.status(201).json({
      message: "User signed up successfully!",
      sussess: true,
      newUser,
    });

    next();
  } catch (error) {
    res.status(400).json({ error: "Failed to sign up user" });
  }
};

const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "Incorrect password or email" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Incorrect password or email" });
    }

    const token = createSecretToken(user._id);
    res.cookie("token", token),
      {
        withCredentials: true,
        httpOnly: true,
      };

    res
      .status(200)
      .json({ message: "User logged in successfully!", success: true });
    next();
  } catch (error) {
    res.status(500).json({ error: "Failed to log in user" });
  }
};

module.exports = {
  signup,
  signin,
};
