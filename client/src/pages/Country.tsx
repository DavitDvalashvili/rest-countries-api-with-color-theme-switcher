import { Button, Stack, Box, Typography } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../App/hook";
import InitialState from "../types";
import { useEffect } from "react";
import { fetchSingleCountry } from "../Feature/countrySlice";
import { useParams, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Error from "../components/Error";
import CountryDetails from "../components/CountryDetails";
import { InitialThemeState } from "../types";
import { Theme } from "../App";

const Country = () => {
  const dispatch = useAppDispatch();
  const countries: InitialState = useAppSelector((state) => state.countries);
  const params = useParams().countryName;
  const error: string = useAppSelector((state) => state.countries.error);

  const theme: InitialThemeState = useAppSelector((state) => state.theme);
  const darkMode = theme.darkMode;

  const navigate = useNavigate();

  useEffect(() => {
    if (params) {
      dispatch(fetchSingleCountry(params));
    }
  }, [dispatch, params]);

  return (
    <>
      {!countries.loading ? (
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
              boxShadow: "0px 10px 10px -5px rgba(0, 0, 0, 0.1)",

              fontSize: {
                xs: "14px",
                lg: "16px",
              },
              lineHeight: "20px",
              fontWeight: `${Theme.typography.fontWeightLight}`,
              mb: {
                xs: "64px",
                lg: "80px",
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
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
          {!error ? (
            <Box
              sx={{
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
              {countries.countries.map((country, index) => (
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
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={country.flag}
                      alt="flag"
                    />
                  </Box>
                  <CountryDetails index={index} />
                </Box>
              ))}
            </Box>
          ) : (
            <Error />
          )}
        </Stack>
      ) : (
        <Box textAlign="center" pt="20px">
          <Typography variant="h6">Loading...</Typography>
        </Box>
      )}
    </>
  );
};

export default Country;
