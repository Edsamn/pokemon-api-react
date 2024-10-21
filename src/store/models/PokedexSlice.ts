import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import PokemonDetails from "../../Types/PokemonDetails";

const initialState: PokemonDetails[] = [];

const pokedexSlice = createSlice({
  name: "pokedex",
  initialState,
  reducers: {
    handlePokedex: (state, action: PayloadAction<PokemonDetails>) => {
      const pokemonIndex = state.findIndex((pokemon) => pokemon.id === action.payload.id);

      if (pokemonIndex === -1) {
        state.push(action.payload);
      } else {
        state.splice(pokemonIndex, 1);
      }
    },
  },
});

export const {handlePokedex} = pokedexSlice.actions;
export default pokedexSlice.reducer;
