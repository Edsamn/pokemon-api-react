import {combineReducers} from "@reduxjs/toolkit";
import pokemonReducer from "./PokemonSlice";
import pokemonDetailsReducer from "./PokemonDetailsSlice";

export default combineReducers({
  pokemons: pokemonReducer,
  pokemon: pokemonDetailsReducer,
});
