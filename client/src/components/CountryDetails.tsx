import { Box, Typography, Stack, Button } from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
import Link from "@mui/material/Link";
import { Link as CustomLink } from "react-router-dom";
import { countryPropsType } from "../types";

const CountryDetails = ({ country }: countryPropsType) => {
  return (
    <Box
      sx={{
        maxWidth: {
          md: "375px",
          lg: "598px",
        },
      }}
    >
      <Typography
        fontWeight="fontWeightBold"
        sx={{
          fontSize: {
            xs: "22px",
            lg: "32px",
          },
          lineHeight: {
            xs: "30px",
            lg: "normal",
          },
          mb: {
            xs: "30px",
            md: "23px",
          },
        }}
      >
        {country.name}
      </Typography>
      <Stack
        display="flex"
        sx={{
          gap: {
            xs: "32px",
            md: "20px",
            lg: "141px",
          },
          flexDirection: {
            xs: "column",
            lg: "row",
          },
        }}
      >
        <Box
          sx={{
            maxWidth: {
              lg: "250px",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "14px",
                lg: "16px",
              },
            }}
            component="div"
            lineHeight="32px"
            fontWeight="fontWeightLight"
          >
            <span style={{ fontWeight: "600" }}>Native Name: </span>
            {country.nativeName}
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "14px",
                lg: "16px",
              },
            }}
            component="div"
            lineHeight="32px"
            fontWeight="fontWeightLight"
          >
            <span style={{ fontWeight: "600" }}>Population: </span>
            {country.population.toLocaleString()}
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "14px",
                lg: "16px",
              },
            }}
            component="div"
            lineHeight="32px"
            fontWeight="fontWeightLight"
          >
            <span style={{ fontWeight: "600" }}>Region: </span>
            {country.region}
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "14px",
                lg: "16px",
              },
            }}
            component="div"
            lineHeight="32px"
            fontWeight="fontWeightLight"
          >
            <span style={{ fontWeight: "600" }}>Sub Region: </span>
            {country.subregion}
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "14px",
                lg: "16px",
              },
            }}
            component="div"
            lineHeight="32px"
            fontWeight="fontWeightLight"
          >
            <span style={{ fontWeight: "600" }}>Capital: </span>
            {country.capital}
          </Typography>
        </Box>
        <Box
          sx={{
            maxWidth: {
              lg: "250px",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "14px",
                lg: "16px",
              },
            }}
            component="div"
            lineHeight="32px"
            fontWeight="fontWeightLight"
          >
            <span style={{ fontWeight: "600" }}>Top Level Domain: </span>
            {country.topLevelDomain}
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "14px",
                lg: "16px",
              },
            }}
            component="div"
            lineHeight="32px"
            fontWeight="fontWeightLight"
          >
            <span style={{ fontWeight: "600" }}>Currencies: </span>
            {country.currencies.map((currency, index, currencies) => (
              <span key={index}>
                {currency.name}
                {index < currencies.length - 1 ? ", " : ""}
              </span>
            ))}
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "14px",
                lg: "16px",
              },
            }}
            component="div"
            lineHeight="32px"
            fontWeight="fontWeightLight"
          >
            <span style={{ fontWeight: "600" }}>Languages: </span>
            {country.languages.map((language, index, languages) => (
              <span key={index}>
                {language.name}
                {index < languages.length - 1 ? ", " : ""}
              </span>
            ))}
          </Typography>
        </Box>
      </Stack>
      <Stack
        sx={{
          mt: {
            xs: "34px",
            lg: "68px",
          },
        }}
      >
        <Box
          display="flex"
          gap="16px"
          sx={{
            flexDirection: {
              xs: "column",
              lg: "row",
            },
            alignItems: {
              lg: "center",
            },
          }}
        >
          <Typography
            component="h6"
            fontSize="16px"
            fontWeight="fontWeightMedium"
            lineHeight="24px"
            sx={{
              width: {
                lg: "127px",
              },
            }}
          >
            Border Countries:{" "}
          </Typography>
          <Box display="flex" gap="10px" flexWrap="wrap">
            {country.borders.map((border, index) => (
              <CustomLink key={index} to={`/country/${border}`}>
                <Button
                  variant="outlined"
                  sx={{
                    border: "none",
                    boxShadow: "0px 0px 4px 1px rgba(0, 0, 0, 0.10)",
                    ":hover": {
                      border: "none",
                    },
                  }}
                >
                  {border}
                </Button>
              </CustomLink>
            ))}
          </Box>
        </Box>
        <Box
          mt="34px"
          display={"flex"}
          justifyContent="left"
          alignItems="center"
          gap="10px"
        >
          <MapIcon />
          <Link
            target="_blank"
            href={`${country.mapLink}${country.name}`}
            underline="none"
            sx={{
              ":hover": {
                textDecoration: "underline",
                color: "blue",
                transition: "all 0.2s ease",
              },
            }}
          >
            See On The Map
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};

export default CountryDetails;
