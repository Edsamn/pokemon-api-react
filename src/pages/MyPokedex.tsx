import {Box, Button, Typography} from "@mui/material";
import DefaultLayout from "../config/layout/DefaultLayout";
import {useAppSelector} from "../store/hooks";
import {useNavigate} from "react-router-dom";

function MyPokedex() {
  const pokedexRedux = useAppSelector((state) => state.pokemons.pokedex);
  const navigate = useNavigate();

  function getBack() {
    navigate("/");
  }
  return (
    <DefaultLayout>
      <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Typography variant="h4">Minha Pokédex</Typography>
        <Box sx={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
          {pokedexRedux.map((pokemon) => (
            <Box key={pokemon.id} sx={{margin: 2, textAlign: "center"}}>
              <img src={pokemon.sprites.front_default} />
              <Typography>{pokemon.name}</Typography>
            </Box>
          ))}
        </Box>
        <Box sx={{padding: "20px"}}>
          <Button variant="contained" onClick={getBack}>
            Voltar à lista
          </Button>
        </Box>
      </Box>
    </DefaultLayout>
  );
}

export default MyPokedex;
