import { createSlice } from "@reduxjs/toolkit";
import { InitialThemeState } from "../types";

// Define initial state for theme slice
const initialThemeState: InitialThemeState = {
  darkMode: false,
};

// Create theme slice with reducer
const themeSlice = createSlice({
  name: "theme",
  initialState: initialThemeState,
  // Reducer to toggle dark mode
  reducers: {
    changeTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
