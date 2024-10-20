import {AppBar, Grid2, Typography} from "@mui/material";

function Footer() {
  return (
    <Grid2 size={{xs: 12, md: 8}}>
      <AppBar
        position="static"
        color="info"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "50px",
        }}
      >
        <Typography>Created by Eduardo Marinho Silva Ribas, 2024, Growdev.</Typography>
      </AppBar>
    </Grid2>
  );
}

export default Footer;
