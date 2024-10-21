import {combineReducers} from "@reduxjs/toolkit";
import PokemonSlice from "./PokemonSlice";
import PokemonDetailsSlice from "./PokemonDetailsSlice";
import PokedexSlice from "./PokedexSlice";

export default combineReducers({
  pokemons: PokemonSlice,
  pokemon: PokemonDetailsSlice,
  pokedex: PokedexSlice,
});
