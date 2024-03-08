import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import countryRouter from "./routes/country.route.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to mongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(PORT, () => {
  console.log("Server is running on port 3001");
});

app.use("/", countryRouter);
