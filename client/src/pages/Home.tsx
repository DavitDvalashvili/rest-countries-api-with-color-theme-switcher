import SearchFilterPanel from "../components/SearchFilterPanel";
import CountryCard from "../components/CountryCard";
import { LoadingButton } from "@mui/lab";
import { useAppDispatch } from "../App/hook";
import { changeLimit } from "../Feature/countrySlice";
import { useAppSelector } from "../App/hook";
import InitialState from "../types";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { fetchCountries } from "../Feature/countrySlice";
import { InitialThemeState } from "../types";
import { Theme } from "../App";

const Home = () => {
  // Redux dispatcher
  const dispatch = useAppDispatch();

  // Redux selectors
  const countries: InitialState = useAppSelector((state) => state.countries);
  const loading = countries.loading;
  const theme: InitialThemeState = useAppSelector((state) => state.theme);
  const darkMode = theme.darkMode;

  // Handle click event for loading more countries
  const handleClick = () => {
    dispatch(changeLimit(12));
  };

  // Fetch countries data from backend on initial load and when filters change
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch, countries.limit, countries.region, countries.searchTerm]);

  return (
    <>
      <SearchFilterPanel />
      <Box
        pl={{
          xs: "56px",
          lg: "80px",
        }}
        pr={{
          xs: "55px",
          lg: "80px",
        }}
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        flexWrap="wrap"
        gap="40px"
        sx={{
          marginX: "auto",
          maxWidth: "1600px",
        }}
      >
        {countries.countries.length > 0 &&
          countries.countries.map((country, index) => (
            <CountryCard key={country.id} index={index} />
          ))}
      </Box>

      {!(countries.countries.length % 12) ? (
        <LoadingButton
          loading={loading}
          variant="outlined"
          onClick={handleClick}
          sx={{
            border: "none",
            boxShadow: "0px 10px 10px -5px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
            padding: "10px",
            marginX: {
              sx: "auto",
            },
            display: "block",
            mx: "auto",
            mb: {
              xs: "65px",
              lg: "45px",
            },
            mt: {
              xs: "40px",
              lg: "48px",
            },
            ":hover": {
              border: "none",
            },
            color: darkMode
              ? Theme.palette.primary.white
              : Theme.palette.primary.main,
            backgroundColor: darkMode
              ? Theme.palette.primary.dark
              : Theme.palette.primary.white,
          }}
        >
          Show More Countries
        </LoadingButton>
      ) : (
        ""
      )}
    </>
  );
};

export default Home;
