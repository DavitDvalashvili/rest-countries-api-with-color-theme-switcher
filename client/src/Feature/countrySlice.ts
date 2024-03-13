import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import InitialState from "../types";
import { country } from "../types";
import { RootState } from "../App/store";

const countriesUrl = `/api/countries`;

const initialState: InitialState = {
  loading: false,
  countries: [],
  error: "",
  region: "All",
  limit: 12,
};

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async (_, { getState }) => {
    const { limit, region } = (getState() as RootState).countries;
    const response = await axios.get(
      `${countriesUrl}?limit=${limit}&region=${region}`
    );
    return response.data;
  }
);

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    filterByRegion: (state, action: PayloadAction<string>) => {
      state.region = action.payload;
    },
    changeLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
  },
  extraReducers: (builder) => {
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
  },
});

export default countriesSlice.reducer;
export const { filterByRegion, changeLimit } = countriesSlice.actions;
