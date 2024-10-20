import DefaultLayout from "../config/layout/DefaultLayout";
import {Box, Button, CircularProgress, Grid2, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {useEffect} from "react";
import {getPokemons} from "../store/models/PokemonSlice";
import PokemonDetails from "../Types/PokemonDetails";
import {Link} from "react-router-dom";

// eslint-disable-next-line prefer-const
let offset = 0;

function Home() {
  const dispatch = useAppDispatch();
  const pokemonsRedux = useAppSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons(offset));
  }, []);

  if (pokemonsRedux.loading) {
    return (
      <>
        <CircularProgress />
      </>
    );
  }

  return (
    <DefaultLayout>
      <Grid2 container>
        <Grid2 sx={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", alignItems: "center"}}>
          {pokemonsRedux.pokemons.map((pokemon: PokemonDetails) => (
            <Box key={pokemon.id} sx={{display: "flex", flexDirection: "column", height: "300px", width: "200px"}}>
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
                <Typography>#{pokemon.id}</Typography>
                <Link to={"/details"}>
                  <Typography variant="h6">{pokemon.name}</Typography>
                </Link>
                <Typography>{pokemon.height / 10} metro(s)</Typography>
                <Button>Salvar na Pokédex</Button>
              </Box>
            </Box>
          ))}
        </Grid2>
      </Grid2>
    </DefaultLayout>
  );
}

export default Home;
