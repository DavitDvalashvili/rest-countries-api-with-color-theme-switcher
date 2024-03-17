/* eslint-disable react-refresh/only-export-components */
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Country from "./pages/Country";
import { createTheme, ThemeProvider } from "@mui/material";
import "@fontsource/nunito-sans";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { InitialThemeState } from "./types";
import { useAppSelector } from "./App/hook";

// Create theme
export const Theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      lg: 1440,
      xl: 2560,
    },
  },
  palette: {
    primary: {
      white: "#FFFFFF",
      light: "#F2F2F2",
      main: "#111517",
      dark: "#2B3844",
      darker: "#202C36",
    },
  },
  typography: {
    fontFamily: [
      "Nunito Sans", // Use Nunito Sans font
      "Arial",
    ].join(","),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 800,
  },
});

const App = () => {
  // Get dark mode state from Redux
  const theme: InitialThemeState = useAppSelector((state) => state.theme);
  const darkMode = theme.darkMode;

  return (
    // Theme provider to apply the custom theme
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <CssBaseline />
        <GlobalStyles
          styles={{
            "*": {
              boxSizing: "border-box",
              padding: "0px",
              margin: "0px",
            },
            body: {
              backgroundColor: darkMode
                ? Theme.palette.primary.darker
                : Theme.palette.primary.light,
              color: darkMode
                ? Theme.palette.primary.white
                : Theme.palette.primary.main,
            },
          }}
        />
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/country/:countryName" element={<Country />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
