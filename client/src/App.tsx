import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Country from "./pages/Country";
import { createTheme, ThemeProvider } from "@mui/material";
import "@fontsource/nunito-sans";
import { CssBaseline, GlobalStyles } from "@mui/material";

export const theme = createTheme({
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
      shadow: "#dfdede",
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
    fontSize: 16,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <GlobalStyles
          styles={{
            "*": {
              boxSizing: "border-box",
            },
          }}
        />
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/country" element={<Country />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
