import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {api} from "../../services/api";
import PokemonDetails from "../../Types/PokemonDetails";

export const getPokemonDetails = createAsyncThunk("pokemons/getPokemonDetails", async (id: number) => {
  try {
    const response = await api.get(`/pokemon/${id}`);
    const pokemon = response.data;

    return pokemon;
  } catch (error) {
    console.log(error);
  }
});

const initialState: PokemonDetails = {};

const pokemonDetailsSlice = createSlice({
  name: "pokemonDetails",
  initialState: {pokemon: initialState, loading: false, id: 0},
  reducers: {
    setId: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
      return state;
    },
  },
  extraReducers(builder) {
    builder.addCase(getPokemonDetails.fulfilled, (state, action) => {
      state.pokemon = action.payload;
      state.loading = false;
      return state;
    });
    builder.addCase(getPokemonDetails.pending, (state) => {
      state.loading = true;
      return state;
    });
    builder.addCase(getPokemonDetails.rejected, (state) => {
      state.loading = false;
      return state;
    });
  },
});

export const {setId} = pokemonDetailsSlice.actions;
export default pokemonDetailsSlice.reducer;
