import express from "express";
import { getCountries, getCountry } from "../controllers/country.controller.js";

const router = express.Router();

router.get("/countries", getCountries);
router.get("/country/:id", getCountry);

export default router;
