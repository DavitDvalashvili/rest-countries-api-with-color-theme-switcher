import { Box, Button, Stack, Typography } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../App/hook";
import InitialState from "../types";
import { useEffect } from "react";
import { fetchSingleCountry } from "../Feature/countrySlice";
import { useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { theme } from "../App";
import MapIcon from "@mui/icons-material/Map";
import Link from "@mui/material/Link";

const Country = () => {
  const dispatch = useAppDispatch();
  const countries: InitialState = useAppSelector((state) => state.countries);
  const params = useParams().countryName;

  useEffect(() => {
    if (params) {
      dispatch(fetchSingleCountry(params));
    }
  }, [dispatch, params]);

  return (
    <Stack
      sx={{
        px: {
          xs: "28px",
          lg: "80px",
        },
        pt: {
          xs: "40px",
          lg: "80px",
        },
        pb: "60px",
      }}
    >
      <Button
        variant="outlined"
        disableRipple
        startIcon={<ArrowBackIcon />}
        sx={{
          px: {
            xs: "24px",
            lg: "32px",
          },
          py: {
            xs: "5px",
            lg: "10px",
          },
          textTransform: "capitalize",
          border: "none",
          width: {
            xs: "104px",
            lg: "136px",
          },
          height: {
            xs: "32px",
            lg: "40px",
          },
          bgcolor: "white",
          boxShadow: "0px 0px 7px 0px rgba(0, 0, 0, 0.29)",
          fontSize: {
            xs: "14px",
            lg: "16px",
          },
          lineHeight: "20px",
          fontWeight: `${theme.typography.fontWeightLight}`,
          mb: {
            xs: "64px",
            lg: "80px",
          },
          ":hover": {
            border: "none",
          },
        }}
      >
        Back
      </Button>
      <Box
        sx={{
          border: "1px solid green",
          maxWidth: {
            xs: "375px",
            md: "unset",
          },
          mx: {
            xs: "auto",
            md: "unset",
          },
        }}
      >
        {countries.countries.map((country) => (
          <Box
            display="flex"
            sx={{
              flexDirection: {
                xs: "column",
                md: "row",
              },
              justifyContent: {
                md: "space-evenly",
                lg: "center",
              },
              gap: {
                xs: "44px",
                lg: "120px",
              },
            }}
            key={country.id}
            border="1px solid black"
          >
            <Box
              sx={{
                width: {
                  xs: "100%",
                  lg: "560px",
                },
                height: {
                  xs: "229px",
                  md: "300px",
                  lg: "401px",
                },
                maxWidth: {
                  xs: "320px",
                  md: "375px",
                  lg: "unset",
                },
                borderRadius: {
                  xs: "5.718px",
                  lg: "10.006px",
                },
              }}
              overflow="hidden"
            >
              <img
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src={country.flag}
                alt="flag"
              />
            </Box>
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
                bgcolor="red"
              >
                <Box
                  sx={{
                    maxWidth: {
                      lg: "250px",
                    },
                  }}
                >
                  <Typography
                    component="div"
                    fontSize="14px"
                    lineHeight="32px"
                    fontWeight="fontWeightLight"
                  >
                    <span style={{ fontWeight: "600" }}>Native Name: </span>
                    {country.nativeName}
                  </Typography>
                  <Typography
                    component="div"
                    fontSize="14px"
                    lineHeight="32px"
                    fontWeight="fontWeightLight"
                  >
                    <span style={{ fontWeight: "600" }}>Population: </span>
                    {country.population.toLocaleString()}
                  </Typography>
                  <Typography
                    component="div"
                    fontSize="14px"
                    lineHeight="32px"
                    fontWeight="fontWeightLight"
                  >
                    <span style={{ fontWeight: "600" }}>Region: </span>
                    {country.region}
                  </Typography>
                  <Typography
                    component="div"
                    fontSize="14px"
                    lineHeight="32px"
                    fontWeight="fontWeightLight"
                  >
                    <span style={{ fontWeight: "600" }}>Sub Region: </span>
                    {country.subregion}
                  </Typography>
                  <Typography
                    component="div"
                    fontSize="14px"
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
                    component="div"
                    fontSize="14px"
                    lineHeight="32px"
                    fontWeight="fontWeightLight"
                  >
                    <span style={{ fontWeight: "600" }}>
                      Top Level Domain:{" "}
                    </span>
                    {country.topLevelDomain}
                  </Typography>
                  <Typography
                    component="div"
                    fontSize="14px"
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
                    component="div"
                    fontSize="14px"
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
              <Stack mt="34px">
                <Box display="flex" flexDirection="column" gap="16px">
                  <Typography
                    component="h6"
                    fontSize="16px"
                    fontWeight="fontWeightMedium"
                    lineHeight="24px"
                  >
                    Border Countries:{" "}
                  </Typography>
                  <Box display="flex" gap="10px" flexWrap="wrap">
                    {country.borders.map((border, index) => (
                      <Button
                        variant="outlined"
                        key={index}
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
                  >
                    See On The Map
                  </Link>
                </Box>
              </Stack>
            </Box>
          </Box>
        ))}
      </Box>
    </Stack>
  );
};

export default Country;
