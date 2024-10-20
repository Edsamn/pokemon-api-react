import {Grid2, Input} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";

function MyAppHeader() {
  return (
    <Grid2 size={{xs: 12, md: 8}}>
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
        <Input placeholder="Procurar..."></Input>
        <Link to={"/my-pokedex"}>
          <Typography>Minha Pokédex</Typography>
        </Link>
      </AppBar>
    </Grid2>
  );
}

export default MyAppHeader;
