import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import InitialState from "../types";
import { country } from "../types";
import { RootState } from "../App/store";

// Define initial state for countries slice
const initialState: InitialState = {
  loading: false,
  countries: [],
  error: "",
  region: "All",
  limit: 12,
  searchTerm: "",
};

// Define async thunk to fetch list of countries
export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async (_, { getState }) => {
    const { limit, region, searchTerm } = (getState() as RootState).countries;
    const response = await axios.get(
      `https://rest-countries-api-eight-rosy.vercel.app/api/countries/?limit=${limit}&region=${region}&searchTerm=${searchTerm}`
    );
    return response.data;
  }
);

// Define async thunk to fetch details of a single country
export const fetchSingleCountry = createAsyncThunk(
  "countries/fetchSingleCountry",
  async (parameter: string) => {
    const response = await axios.get(
      `https://rest-countries-api-eight-rosy.vercel.app/api/country/${parameter}`
    );
    return response.data;
  }
);

// Create countries slice with reducers and extra reducers
const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    // Reducer to filter countries by region
    filterByRegion: (state, action: PayloadAction<string>) => {
      state.region = action.payload;
    },
    // Reducer to change limit for number of countries displayed
    changeLimit: (state, action: PayloadAction<number>) => {
      state.limit = state.limit + action.payload;
    },
    // Reducer to change search term for filtering countries
    searchTermChange: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Extra reducers for handling async thunk actions
    builder.addCase(fetchCountries.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchCountries.fulfilled,
      (state, action: PayloadAction<country[]>) => {
        state.loading = false;
        state.countries = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchCountries.rejected, (state, action) => {
      state.loading = false;
      state.countries = [];
      state.error = action.error.message || "Something went wrong";
    });
    builder.addCase(fetchSingleCountry.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchSingleCountry.fulfilled,
      (state, action: PayloadAction<country[]>) => {
        state.loading = false;
        state.countries = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchSingleCountry.rejected, (state, action) => {
      state.loading = false;
      state.countries = [];
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default countriesSlice.reducer;
export const { filterByRegion, changeLimit, searchTermChange } =
  countriesSlice.actions;
