import { Box, Stack, Typography } from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const Header = () => {
  return (
    <Stack
      component="header"
      px={{
        xs: "16px",
        lg: "80px",
      }}
      py={{
        xs: "30px",
        lg: "23.5px",
      }}
      direction="row"
      spacing="auto"
      color="primary.main"
      sx={{
        boxShadow: "0px 10px 10px -5px rgba(0, 0, 0, 0.1)",
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
    </Stack>
  );
};

export default Header;
