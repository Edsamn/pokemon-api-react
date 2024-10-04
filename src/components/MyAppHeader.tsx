import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";

function MyAppHeader() {
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar
        position="static"
        color="info"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: "20px",
        }}
      >
        <Typography variant="h3">Pokémon</Typography>
        <Link to={"/my-pokedex"}>
          <Typography>Minha Pokédex</Typography>
        </Link>
      </AppBar>
    </Box>
  );
}

export default MyAppHeader;
