import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {api} from "../../services/api";
import PokemonType from "../../Types/PokemonType";
import PokemonDetails from "../../Types/PokemonDetails";

export const getPokemons = createAsyncThunk("pokemons/getPokemons", async (offset: number) => {
  try {
    const response = await api.get(`/pokemon?offset=${offset}&limit=20`);
    const pokeList = response.data.results;

    const getDetails = pokeList.map(async (pokemon: PokemonType) => {
      const detailsList = await api.get<PokemonDetails>(pokemon.url);
      return detailsList.data;
    });

    const completeResults = await Promise.all(getDetails);

    return completeResults;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {pokemons: [] as PokemonDetails[], loading: false, offset: 0, pokedex: [] as PokemonDetails[]};

const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setOffset: (state, action: PayloadAction<number>) => {
      state.offset = action.payload;
      return state;
    },
    addToPokedex: (state, action: PayloadAction<PokemonDetails>) => {
      const pokemonExists = state.pokedex.find((pokemon) => pokemon.id === action.payload.id);

      if (!pokemonExists) {
        state.pokedex.push(action.payload);
      } else {
        const findIndex = state.pokedex.findIndex(pokemonExists);
        state.pokedex.splice(findIndex, 1);
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(getPokemons.fulfilled, (state, action) => {
      state.pokemons = action.payload;
      state.loading = false;
      return state;
    });
    builder.addCase(getPokemons.pending, (state) => {
      state.loading = true;
      return state;
    });
    builder.addCase(getPokemons.rejected, (state) => {
      state.loading = false;
      return state;
    });
  },
});

export const {setOffset, addToPokedex} = pokemonSlice.actions;
export default pokemonSlice.reducer;
