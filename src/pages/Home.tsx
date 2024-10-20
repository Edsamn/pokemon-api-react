import DefaultLayout from "../config/layout/DefaultLayout";
import {Box, Button, CircularProgress, Grid2, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {useEffect} from "react";
import {addToPokedex, getPokemons, setOffset} from "../store/models/PokemonSlice";
import PokemonDetails from "../Types/PokemonDetails";
import {Link} from "react-router-dom";

function Home() {
  const dispatch = useAppDispatch();
  const pokemonsRedux = useAppSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons(pokemonsRedux.offset));
  }, [dispatch, pokemonsRedux.offset]);

  function nextPage() {
    dispatch(setOffset(pokemonsRedux.offset + 20));
  }

  function prevPage() {
    if (pokemonsRedux.offset > 0) {
      dispatch(setOffset(pokemonsRedux.offset - 20));
    }
  }

  function saveOnPokedex(pokemon: PokemonDetails) {
    dispatch(addToPokedex(pokemon));
  }

  if (pokemonsRedux.loading) {
    return (
      <>
        <CircularProgress />
      </>
    );
  }

  return (
    <DefaultLayout>
      <Grid2 container sx={{display: "flex", justifyContent: "center"}}>
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
                <Link to={`/details/${pokemon.id}`}>
                  <Typography sx={{textDecoration: "underline"}} variant="h6">
                    {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
                  </Typography>
                </Link>
                <Typography>{pokemon.height / 10} metro(s)</Typography>
                <Button color="error" onClick={() => saveOnPokedex(pokemon)}>
                  Salvar na Pokédex
                </Button>
              </Box>
            </Box>
          ))}
        </Grid2>
        <Box sx={{display: "flex", width: "200px", justifyContent: "space-between", padding: "20px"}}>
          <Button
            variant="contained"
            sx={{backgroundColor: "info"}}
            onClick={prevPage}
            disabled={pokemonsRedux.offset === 0}
          >
            Voltar
          </Button>
          <Button variant="contained" onClick={nextPage} disabled={pokemonsRedux.offset === 1300}>
            próxima
          </Button>
        </Box>
      </Grid2>
    </DefaultLayout>
  );
}

export default Home;
