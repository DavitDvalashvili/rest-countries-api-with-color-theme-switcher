import { Typography, Box } from "@mui/material";

const Error = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h1">404</Typography>
      <Typography variant="h6">Country not Found</Typography>
    </Box>
  );
};

export default Error;
