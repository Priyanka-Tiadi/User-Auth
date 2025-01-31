import bcrypt from 'bcrypt';
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();  // Load environment variables
connectDB();  // Connect to MongoDB

const app = express();
app.use(express.json());  
// Middleware to parse JSON requests

// Handle POST requests at root ("/")
app.post("/", (req, res) => {
  const { name, email, password } = req.body;  // Destructure request body
  console.log("Received data:", name, email, password);  // Log data

  // Respond with a success message and the received data
  res.json({
    message: "Data received successfully!",
    receivedData: {
      name,
      email,
      password
    }
  });
});

// Handle GET request at root ("/") to avoid the "Cannot GET /" error
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Test route (added below existing routes)
app.get("/test", (req, res) => {
  res.json({ message: "Test route working!" });
});

// Start the server on port 5005
const PORT = process.env.PORT || 5005;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
