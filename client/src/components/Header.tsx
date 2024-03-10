import { Box, Typography } from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { theme } from "../App";

const Header = () => {
  return (
    <Box
      component="header"
      px="16px"
      py="30px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      color="primary.main"
      sx={{
        boxShadow: `10px 10px 10px -5px ${theme.palette.primary.shadow}`,
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        fontWeight="fontWeightBold"
        fontSize={{
          xs: "16px",
          lg: "24px",
        }}
        lineHeight={{
          xs: "20px",
          lg: "33px",
        }}
      >
        Where in the world?
      </Typography>
      <Box
        component="div"
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="8px"
      >
        <DarkModeOutlinedIcon
          sx={{
            fontSize: {
              xs: "16px",
              md: "20px",
            },
          }}
        />
        <Typography
          component="span"
          fontWeight="fontWeightMedium"
          fontSize="16px"
          lineHeight={{
            sm: "16px",
            lg: "22px",
          }}
        >
          Dark Mode
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
