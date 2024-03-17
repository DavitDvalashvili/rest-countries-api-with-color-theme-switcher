import mongoose from "mongoose";

// Define the schema for country data
const countrySchema = new mongoose.Schema({
  id: String,
  name: String,
  nativeName: String,
  population: Number,
  region: String,
  subregion: String,
  capital: String,
  topLevelDomain: String,
  alpha3Code: String,
  currencies: [
    {
      name: String,
    },
  ],
  languages: [
    {
      name: String,
    },
  ],
  flag: String,
  borders: [String],
  mapLink: {
    type: String,
    default: `https://www.google.com/maps/place/`,
  },
});

// Modify data and delete unnecessary properties before returning JSON
countrySchema.set("toJSON", {
  transform: (document, returnObject) => {
    returnObject.id = returnObject._id.toString();
    delete returnObject._id;
    delete returnObject.__v;
    delete returnObject.alpha2Code;
    delete returnObject.callingCodes;
    delete returnObject.altSpellings;
    delete returnObject.latlng;
    delete returnObject.demonym;
    delete returnObject.area;
    delete returnObject.timezones;
    delete returnObject.numericCode;
    delete returnObject.flags;
    delete returnObject.translations;
    delete returnObject.regionalBlocs;
    delete returnObject.cioc;
    delete returnObject.independent;
    returnObject.currencies.forEach((currency) => {
      delete currency.code;
      delete currency.symbol;
      delete currency._id;
    });
    returnObject.languages.forEach((language) => {
      delete language.iso639_1;
      delete language.iso639_2;
      delete language._id;
      delete language.nativeName;
    });
  },
});

// Create a model from the schema
const CountryModel = mongoose.model("countries", countrySchema);

export default CountryModel;
