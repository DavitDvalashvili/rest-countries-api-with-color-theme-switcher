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
//import { theme } from "../App";

const Home = () => {
  const dispatch = useAppDispatch();

  const countries: InitialState = useAppSelector((state) => state.countries);
  const loading = countries.loading;

  const handleClick = () => {
    dispatch(changeLimit(12));
  };

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
