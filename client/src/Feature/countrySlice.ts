import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import InitialState from "../types";
import { country } from "../types";
import { RootState } from "../App/store";

const initialState: InitialState = {
  loading: false,
  countries: [],
  error: "",
  region: "All",
  limit: 12,
  searchTerm: "",
};

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async (_, { getState }) => {
    const { limit, region, searchTerm } = (getState() as RootState).countries;
    const response = await axios.get(
      `/api/countries/?limit=${limit}&region=${region}&searchTerm=${searchTerm}`
    );
    return response.data;
  }
);

export const fetchSingleCountry = createAsyncThunk(
  "countries/fetchSingleCountry",
  async (parameter: string) => {
    const response = await axios.get(`/api/country/${parameter}`);
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
      state.limit = state.limit + action.payload;
    },
    searchTermChange: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
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
    builder.addCase(fetchSingleCountry.rejected, (state) => {
      state.loading = false;
      state.countries = [];
      state.error = "Country not found";
    });
  },
});

export default countriesSlice.reducer;
export const { filterByRegion, changeLimit, searchTermChange } =
  countriesSlice.actions;
