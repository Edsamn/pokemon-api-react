import {Box, Button, Grid2, Typography} from "@mui/material";
import DefaultLayout from "../config/layout/DefaultLayout";
import {useAppSelector} from "../store/hooks";
import {useNavigate} from "react-router-dom";
import PokemonDetails from "../Types/PokemonDetails";

function MyPokedex() {
  const pokedexRedux = useAppSelector((state) => state.pokedex);
  const navigate = useNavigate();

  function getBack() {
    navigate("/");
  }

  if (pokedexRedux.length === 0) {
    return (
      <DefaultLayout>
        <Box sx={{height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Typography variant="h3">A pokédex está vazia...</Typography>
          <Box sx={{padding: "20px"}}>
            <Button variant="contained" onClick={getBack}>
              Voltar à lista
            </Button>
          </Box>
        </Box>
      </DefaultLayout>
    );
  }
  return (
    <DefaultLayout>
      <Grid2 container sx={{display: "flex", justifyContent: "center"}}>
        <Typography sx={{position: "absolute", padding: "20px"}} variant="h4">
          Minha Pokédex
        </Typography>
        <Grid2
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "center",
            paddingTop: "50px",
          }}
        >
          {pokedexRedux.map((pokemon: PokemonDetails) => (
            <Box key={pokemon.id} sx={{display: "flex", flexDirection: "column", height: "300px", width: "250px"}}>
              <Box
                sx={{
                  height: "250px",
                  width: "100%",
                  backgroundImage: `url(${pokemon.sprites.front_default})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></Box>
              <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                <Typography>{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</Typography>
              </Box>
            </Box>
          ))}
        </Grid2>
      </Grid2>
      <Box sx={{marginBottom: "150px", display: "flex", alignSelf: "center", justifyContent: "center"}}>
        <Button variant="contained" onClick={getBack}>
          Voltar à lista
        </Button>
      </Box>
    </DefaultLayout>
  );
}

export default MyPokedex;
