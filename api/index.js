import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import countryRouter from "./routes/country.route.js";
import cors from "cors";
dotenv.config();

const app = express(); // Create an instance of Express
const PORT = process.env.PORT || 3001; // Define the port number from environment variables or default to 3001
const MONGO_URL = process.env.MONGO_URL; // Get MongoDB URL from environment variables

app.use(cors());

app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to mongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

// Start the server
app.listen(PORT, () => {
  console.log("Server is running on port 3001");
});

app.use("/api", countryRouter); // Mount the countryRouter under the /api endpoint
