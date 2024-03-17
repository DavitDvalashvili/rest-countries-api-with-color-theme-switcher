import { createSlice } from "@reduxjs/toolkit";
import { InitialThemeState } from "../types";

const initialThemeState: InitialThemeState = {
  darkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialThemeState,
  reducers: {
    changeTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
