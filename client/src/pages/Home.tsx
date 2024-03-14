import React from "react";
import SearchFilterPanel from "../components/SearchFilterPanel";
import CountryCard from "../components/CountryCard";
import { LoadingButton } from "@mui/lab";
import { useAppDispatch } from "../App/hook";
import { changeLimit } from "../Feature/countrySlice";
import { useAppSelector } from "../App/hook";
import InitialState from "../types";
import { shallowEqual } from "react-redux";
//import { theme } from "../App";

const Home = () => {
  const dispatch = useAppDispatch();

  const countries: InitialState = useAppSelector(
    (state) => state.countries,
    shallowEqual
  );
  const loading = countries.loading;

  const handleClick = () => {
    dispatch(changeLimit(12));
  };

  return (
    <>
      <SearchFilterPanel />
      <CountryCard />
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

export default React.memo(Home);
