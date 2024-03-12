import { Box, Stack, MenuItem, FormControl, Select } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { theme } from "../App";
import CountryCard from "../components/CountryCard";
import { LoadingButton } from "@mui/lab";
import { useAppDispatch } from "../App/hook";
import { changeLimit } from "../Feature/countrySlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(changeLimit(20));
    const urlParams = new URLSearchParams();
    urlParams.set("limit", `${2}`);
    const searchQuery = urlParams.toString();
    navigate(`/?${searchQuery}`);
  };

  return (
    <>
      <Stack
        pt={{
          xs: "24px",
          lg: "48px",
        }}
        pb={{
          xs: "32px",
          lg: "48px",
        }}
        px={{
          xs: "16px",
          lg: "80px",
        }}
        flexDirection={{
          xs: "column",
          lg: "row",
        }}
        display="flex"
        gap="40px"
        justifyContent="space-between"
      >
        <Box
          display="flex"
          alignItems="center"
          gap="28px"
          maxWidth="480px"
          py={{ xs: "14px", lg: "16px" }}
          px={{ xs: "32px" }}
          sx={{
            boxShadow: `0px 0px 25px 0px ${theme.palette.primary.shadow}`,
            lineHeight: "14px",
          }}
          fontSize={{
            xs: "12px",
            lg: "14px",
          }}
          width={{
            lg: "480px",
          }}
        >
          <SearchIcon sx={{ width: "16px", height: "16px" }} />
          <input
            placeholder="Search for a country…"
            style={{
              width: "100%",
              border: "none",
              outline: "none",
              height: "20px",
              padding: "0px",
            }}
          />
        </Box>
        <FormControl
          sx={{
            width: "200px",
            boxShadow: `0px 0px 25px 0px ${theme.palette.primary.shadow}`,
          }}
        >
          <Select
            defaultValue="All"
            size="small"
            IconComponent={ExpandMoreIcon}
            MenuProps={{
              PaperProps: {
                sx: {
                  top: {
                    xs: "248px !important",
                    lg: "192px !important",
                  },
                },
              },
            }}
            sx={{
              borderRadius: "5px",
              fontSize: "12px",
              fontWeight: "14px",
              backgroundColor: `${theme.palette.primary.white}`,
              ".MuiOutlinedInput-notchedOutline": { border: 0 },
              boxShadow: "none",
              "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  border: 0,
                  padding: 0,
                },
              "& .MuiSelect-icon": {
                width: "15px",
                mr: "15px",
              },
              height: { xs: "48px", lg: "56px" },
            }}
            inputProps={{
              sx: {
                px: "24px",
                py: {
                  xs: "14px",
                  lg: "18px",
                },
              },
            }}
          >
            <MenuItem value="All" sx={{ fontSize: "12px" }}>
              Filter by region
            </MenuItem>
            <MenuItem value="Europe" sx={{ fontSize: "12px" }}>
              Europe
            </MenuItem>
            <MenuItem value="Asia" sx={{ fontSize: "12px" }}>
              Asia
            </MenuItem>
            <MenuItem value="Africa" sx={{ fontSize: "12px" }}>
              Africa
            </MenuItem>
            <MenuItem value="Oceania" sx={{ fontSize: "12px" }}>
              Oceania
            </MenuItem>
            <MenuItem value="Polar" sx={{ fontSize: "12px" }}>
              Polar
            </MenuItem>
            <MenuItem value="Americas" sx={{ fontSize: "12px" }}>
              Americas
            </MenuItem>
            <MenuItem value="Antarctic Ocean" sx={{ fontSize: "12px" }}>
              Antarctic Ocean
            </MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Stack>
        <CountryCard></CountryCard>
      </Stack>
      <LoadingButton
        //loading
        variant="outlined"
        onClick={handleClick}
      >
        See more countries
      </LoadingButton>
    </>
  );
};

export default Home;
