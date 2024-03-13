import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { fetchCountries } from "../Feature/countrySlice";
import { useAppSelector, useAppDispatch } from "../App/hook";
import InitialState from "../types";

const CountryCard = () => {
  const countries: InitialState = useAppSelector((state) => state.countries);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
    //console.log(`chage region ${countries.region}`);
  }, [dispatch, countries.limit, countries.region]);

  return (
    <Container>
      {countries.countries.map((country) => (
        <Card key={country.id}>
          <CardMedia
            component="img"
            width="264px"
            height="160px"
            image={country.flag}
            alt="flag"
          />
          <CardContent>
            <Typography variant="h4" component="h6">
              {country.name}
            </Typography>
            <Typography component="div">
              <Typography component="div">
                <Typography component="span">Population: </Typography>
                {country.population.toLocaleString()}
              </Typography>
              <Typography component="div">
                <Typography component="span">Region: </Typography>
                {country.region}
              </Typography>
              <Typography component="div">
                <Typography component="span">Capital: </Typography>
                {country.capital}
              </Typography>
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default CountryCard;
