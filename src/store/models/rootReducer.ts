import {combineReducers} from "@reduxjs/toolkit";
import PokemonSlice from "./PokemonSlice";
import PokemonDetailsSlice from "./PokemonDetailsSlice";

export default combineReducers({
  pokemons: PokemonSlice,
  pokemon: PokemonDetailsSlice,
});
