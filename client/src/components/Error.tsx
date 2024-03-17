import { Typography, Box } from "@mui/material";

// Error component for displaying 404 message
const Error = () => {
  return (
    // Box component to center content vertically and horizontally
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h1">404</Typography>
      <Typography variant="h6">Country not Found</Typography>
    </Box>
  );
};

export default Error;
