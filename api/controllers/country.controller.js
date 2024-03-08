import CountryModel from "../models/countries.model.js";

const getCountries = async (req, res, next) => {
  try {
    const countries = await CountryModel.find({});
    res.status(200).json(countries);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default getCountries;
