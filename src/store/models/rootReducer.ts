import {combineReducers} from "@reduxjs/toolkit";
import PokemonSlice from "./PokemonSlice";

export default combineReducers({
  pokemons: PokemonSlice,
});