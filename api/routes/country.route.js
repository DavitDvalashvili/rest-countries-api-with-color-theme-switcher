import express from "express";
import { getCountries, getCountry } from "../controllers/country.controller.js";

// Create a router instance
const router = express.Router();

// Define routes for fetching countries and a single country by ID
router.get("/countries", getCountries);
router.get("/country/:id", getCountry);

export default router;
