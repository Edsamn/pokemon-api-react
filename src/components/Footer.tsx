import {Box, Grid2, Typography} from "@mui/material";

function Footer() {
  return (
    <Grid2 size={{xs: 12, md: 8}}>
      <Box
        sx={{
          backgroundColor: "#048cd4",
          color: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "10vh",
          position: "fixed",
          width: "100vw",
        }}
      >
        <Typography>Created by Eduardo Marinho Silva Ribas, 2024, Growdev.</Typography>
      </Box>
    </Grid2>
  );
}

export default Footer;
