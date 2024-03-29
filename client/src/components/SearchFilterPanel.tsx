import { Stack, Box, FormControl, Select, MenuItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Theme } from "../App";
import { useEffect, useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import { useAppDispatch, useAppSelector } from "../App/hook";
import { filterByRegion, searchTermChange } from "../Feature/countrySlice";
import { useLocation, useNavigate } from "react-router-dom";
import { InitialThemeState } from "../types";

// SearchFilterPanel component for filtering and searching countries
const SearchFilterPanel = () => {
  const [selectedValue, setSelectedValue] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const theme: InitialThemeState = useAppSelector((state) => state.theme);

  const darkMode = theme.darkMode;

  // Function to handle region select change
  const handleSelectRegion = (e: SelectChangeEvent) => {
    setSelectedValue(e.target.value);
    dispatch(filterByRegion(e.target.value));
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("region", `${e.target.value}`);
    const searchQuery = urlParams.toString();
    navigate(`/?${searchQuery}`);
  };

  // Function to handle input change for search term
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    dispatch(searchTermChange(e.target.value));
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", `${e.target.value}`);
    const searchQuery = urlParams.toString();
    navigate(`/?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const region = urlParams.get("region");
    const searchTerm = urlParams.get("searchTerm");
    if (region) {
      dispatch(filterByRegion(region));
      setSelectedValue(region);
    }
    if (searchTerm) {
      dispatch(searchTermChange(searchTerm));
      setSearchTerm(searchTerm);
    }
  }, [dispatch, location.search]);

  return (
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
          boxShadow: "0px 10px 10px -5px rgba(0, 0, 0, 0.1)",
          lineHeight: "14px",
          borderRadius: "5px",
          backgroundColor: darkMode
            ? Theme.palette.primary.dark
            : Theme.palette.primary.white,
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
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search for a country…"
          style={{
            width: "100%",
            border: "none",
            outline: "none",
            height: "20px",
            padding: "0px",
            backgroundColor: darkMode
              ? Theme.palette.primary.dark
              : Theme.palette.primary.white,
            color: darkMode
              ? Theme.palette.primary.white
              : Theme.palette.primary.main,
          }}
        />
      </Box>
      <FormControl
        sx={{
          width: "200px",
          boxShadow: "0px 10px 10px -5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Select
          defaultValue="All"
          value={selectedValue}
          onChange={handleSelectRegion}
          size="small"
          IconComponent={ExpandMoreIcon}
          MenuProps={{
            PaperProps: {
              sx: {
                top: {
                  xs: "248px !important",
                  lg: "192px !important",
                },
                color: darkMode
                  ? Theme.palette.primary.white
                  : Theme.palette.primary.main,
                backgroundColor: darkMode
                  ? Theme.palette.primary.dark
                  : Theme.palette.primary.white,
              },
            },
          }}
          sx={{
            borderRadius: "5px",
            fontSize: "12px",
            lineHeight: "14px",
            backgroundColor: `${Theme.palette.primary.white}`,
            color: darkMode
              ? Theme.palette.primary.white
              : Theme.palette.primary.main,
            background: darkMode
              ? Theme.palette.primary.dark
              : Theme.palette.primary.white,
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
              color: darkMode
                ? Theme.palette.primary.white
                : Theme.palette.primary.main,
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
          <MenuItem
            value="All"
            sx={{
              fontSize: "12px",
              color: darkMode
                ? Theme.palette.primary.white
                : Theme.palette.primary.main,
              backgroundColor: darkMode
                ? Theme.palette.primary.dark
                : Theme.palette.primary.white,
            }}
          >
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
  );
};

export default SearchFilterPanel;
