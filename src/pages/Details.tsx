import {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {CircularProgress, Box, Typography, Button} from "@mui/material";
import {getPokemonDetails} from "../store/models/PokemonDetailsSlice";
import DefaultLayout from "../config/layout/DefaultLayout";

function Details() {
  const {id} = useParams<{id: number}>();
  const dispatch = useAppDispatch();
  const pokemonDetailsRedux = useAppSelector((state) => state.pokemon);
  const statsTotal = pokemonDetailsRedux.pokemon.stats.map((stat) => stat.base_stat);
  const total = statsTotal.reduce((a, b) => a + b, 0);
  const navigate = useNavigate();

  function getBack() {
    navigate("/");
  }

  useEffect(() => {
    if (id) {
      dispatch(getPokemonDetails(id));
    }
  }, [id, dispatch]);

  if (pokemonDetailsRedux.loading) {
    return <CircularProgress />;
  }

  return (
    <DefaultLayout>
      <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", padding: "20px"}}>
        <Typography variant="h3">
          {pokemonDetailsRedux.pokemon.name[0].toUpperCase() + pokemonDetailsRedux.pokemon.name.substring(1)}
        </Typography>
        <Box
          sx={{
            height: "250px",
            width: "250px",
            backgroundImage: `url(${pokemonDetailsRedux.pokemon.sprites.front_default})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
        <Typography>
          <span style={{color: "blue"}}>Id: #</span>
          {pokemonDetailsRedux.pokemon.id}
        </Typography>
        <Typography>
          <span style={{color: "blue"}}>Peso: </span>
          {pokemonDetailsRedux.pokemon.weight / 10} kg
        </Typography>
        <Typography>
          <span style={{color: "blue"}}>Altura: </span>
          {pokemonDetailsRedux.pokemon.height / 10} metro(s)
        </Typography>
        <Typography>
          <span style={{color: "blue"}}>Habilidades: </span>
          {pokemonDetailsRedux.pokemon.abilities.map((ability) => ability.ability.name).join(", ")}
        </Typography>
        <Typography>
          <span style={{color: "blue"}}>
            Stats (em ordem): vitalidade, ataque, defesa, ataque especial, defesa especial, velocidade
          </span>
          {pokemonDetailsRedux.pokemon.stats.map((stat) => (
            <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
              {stat.base_stat}
            </Box>
          ))}
        </Typography>
        <Typography>
          <span style={{color: "blue"}}>Total dos Stats: </span>
          {total}
        </Typography>
        <Box sx={{padding: "20px"}}>
          <Button variant="contained" onClick={getBack}>
            Voltar à lista
          </Button>
        </Box>
      </Box>
    </DefaultLayout>
  );
}

export default Details;
