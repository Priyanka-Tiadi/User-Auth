// config/db.js
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Use only the Mongo URI without deprecated options
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};

export default connectDB;
