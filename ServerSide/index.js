const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");

const app = express();

const dbURI =
  "mongodb+srv://shahzaib:shahzaib@cluster1.bkmxkaa.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", authRoutes);

// Connect to MongoDB and start the server
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server Running on Port: http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit the Node.js process with an error code
  });
