import CountryModel from "../models/countries.model.js";
import errorHandler from "../utils/error.js";

export const getCountry = async (req, res, next) => {
  try {
    const country = await CountryModel.find({ alpha3Code: `${req.params.id}` });
    if (!country) {
      return next(errorHandler(404, "country not found!"));
    }
    res.status(200).json(country);
  } catch (error) {
    next(error);
  }
};

// export const getCountries = async (req, res, next) => {
//   try {
//     const limit = parseInt(req.query.limit) || 12;
//     const startIndex = parseInt(req.query.startIndex) || 0;
//     const searchTerm = req.query.searchTerm || "";
//     const region = req.query.region || "";

//     const countries = await CountryModel.find({
//       name: { $regex: searchTerm, $options: "i" },
//       region,
//     })
//       .limit(limit)
//       .skip(startIndex);

//     console.log(countries.length);
//     res.status(200).json(countries);
//   } catch (error) {
//     next(error);
//   }
// };

export const getCountries = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const startIndex = parseInt(req.query.startIndex) || 0;
    let region = req.query.region || "";

    if (region === "") {
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

    const searchTerm = req.query.searchTerm || "";

    const countries = await CountryModel.find({
      name: { $regex: searchTerm, $options: "i" },
      region,
    })
      .limit(limit)
      .skip(startIndex);

    console.log(countries.length);
    return res.status(200).json(countries);
  } catch (error) {
    next(error);
  }
};
