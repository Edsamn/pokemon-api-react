import DefaultLayout from "../config/layout/DefaultLayout";
import {Box, CircularProgress, Grid2, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {useEffect} from "react";
import {getPokemons} from "../store/models/PokemonSlice";
import PokemonType from "../Types/PokemonType";

function Home() {
  const dispatch = useAppDispatch();
  const pokemonsRedux = useAppSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
    console.log(pokemonsRedux.pokemons.results);
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
        <Grid2
          sx={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", alignItems: "center"}}
          size={{xs: 12, md: 8}}
        >
          {pokemonsRedux.pokemons.results.map((pokemon: PokemonType) => (
            <Box key={pokemon.id} sx={{display: "flex", flexDirection: "column", height: "200px", width: "150px"}}>
              {/* <Box
                sx={{
                  height: "150px",
                  width: "100%",
                  backgroundImage: `url(${pokemon.sprites.front_default})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></Box> */}
              <Box>
                <Typography>{pokemon.id}</Typography>
                <></>
              </Box>
            </Box>
          ))}
        </Grid2>
      </Grid2>
    </DefaultLayout>
  );
}

export default Home;
