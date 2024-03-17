import CountryModel from "../models/countries.model.js";
import errorHandler from "../utils/error.js";

// Controller function to get a single country by its alpha3Code
export const getCountry = async (req, res, next) => {
  try {
    const country = await CountryModel.find({ alpha3Code: `${req.params.id}` });
    if (country.length == 0) {
      return next(errorHandler(404, "country not found!"));
    }
    res.status(200).json(country);
  } catch (error) {
    next(errorHandler(500, "Server error"));
  }
};

// Controller function to get multiple countries based on optional query parameters
export const getCountries = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 12;
    const startIndex = parseInt(req.query.startIndex) || 0;
    let region = req.query.region || "All";

    // If region is "All", include all regions in the filter
    if (region === "All") {
      region = {
        $in: [
          "Europe",
          "Asia",
          "Africa",
          "Oceania",
          "Polar",
          "Americas",
          "Antarctic Ocean",
        ],
      };
    }

    // Get searchTerm from query parameters, default to empty string
    const searchTerm = req.query.searchTerm || "";

    // Find countries based on name (case-insensitive regex) and region
    const countries = await CountryModel.find({
      name: { $regex: searchTerm, $options: "i" },
      region,
    })
      .limit(limit)
      .skip(startIndex);
    return res.status(200).json(countries);
  } catch (error) {
    next(errorHandler(400, "Server error"));
  }
};
