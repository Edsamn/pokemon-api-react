import {Grid2} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import {Link, useNavigate} from "react-router-dom";

function MyAppHeader() {
  const navigate = useNavigate();

  function getBack() {
    navigate("/");
  }
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
          height: "10vh",
        }}
      >
        <Typography variant="h3" onClick={getBack} sx={{cursor: "pointer"}}>
          Pokémon
        </Typography>
        <Link to={"/my-pokedex"}>
          <Typography variant="h5">Minha Pokédex</Typography>
        </Link>
      </AppBar>
    </Grid2>
  );
}

export default MyAppHeader;
