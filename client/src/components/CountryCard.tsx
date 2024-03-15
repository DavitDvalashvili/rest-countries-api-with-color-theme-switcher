import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Link,
} from "@mui/material";
import { useEffect } from "react";
import { fetchCountries } from "../Feature/countrySlice";
import { useAppSelector, useAppDispatch } from "../App/hook";
import InitialState from "../types";
//import { theme } from "../App";

const CountryCard = () => {
  const countries: InitialState = useAppSelector((state) => state.countries);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch, countries.limit, countries.region, countries.searchTerm]);

  return (
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
    >
      {countries.countries.map((country) => (
        <Link
          key={country.id}
          underline="none"
          href={`/country/${country.alpha3Code}`}
        >
          <Card
            sx={{
              width: "264px",
              borderRadius: "5px",
              boxShadow: "0px 10px 10px -5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <CardMedia
              component="img"
              width="264px"
              height="160px"
              image={country.flag}
              alt="flag"
            />
            <CardContent sx={{ padding: "24px" }}>
              <Typography
                variant="h4"
                component="h6"
                fontSize="18px"
                lineHeight="26px"
                fontWeight="fontWeightBold"
                pb="16px"
              >
                {country.name}
              </Typography>
              <Typography component="div">
                <Typography component="div" fontSize="14px" lineHeight="16px">
                  <Typography component="span" fontWeight="fontWeightMedium">
                    Population:{" "}
                  </Typography>
                  {country.population.toLocaleString()}
                </Typography>
                <Typography component="div" fontSize="14px" lineHeight="16px">
                  <Typography component="span" fontWeight="fontWeightMedium">
                    Region:{" "}
                  </Typography>
                  {country.region}
                </Typography>
                <Typography component="div" fontSize="14px" lineHeight="16px">
                  <Typography component="span" fontWeight="fontWeightMedium">
                    Capital:{" "}
                  </Typography>
                  {country.capital}
                </Typography>
              </Typography>
            </CardContent>
          </Card>
        </Link>
      ))}
    </Box>
  );
};

export default CountryCard;
