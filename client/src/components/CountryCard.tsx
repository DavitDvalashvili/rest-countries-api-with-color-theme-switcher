import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { useAppSelector } from "../App/hook";
import InitialState from "../types";
import { Link } from "react-router-dom";
import { countryCardProps } from "../types";
import { InitialThemeState } from "../types";
import { Theme } from "../App";

const CountryCard = ({ index }: countryCardProps) => {
  // Redux selector for accessing countries data
  const countries: InitialState = useAppSelector((state) => state.countries);
  const country = countries.countries[index];

  // Redux selector for accessing theme data
  const theme: InitialThemeState = useAppSelector((state) => state.theme);
  const darkMode = theme.darkMode;

  return (
    // Link to country detail page
    <Link
      to={`/country/${country.alpha3Code}`}
      style={{
        textDecoration: "none",
      }}
    >
      <Card
        sx={{
          width: "264px",
          borderRadius: "5px",
          boxShadow: "0px 10px 10px -5px rgba(0, 0, 0, 0.1)",
          color: darkMode
            ? Theme.palette.primary.white
            : Theme.palette.primary.main,
          backgroundColor: darkMode
            ? Theme.palette.primary.dark
            : Theme.palette.primary.white,
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
  );
};

export default CountryCard;
