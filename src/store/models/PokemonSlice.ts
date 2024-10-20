import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {api} from "../../services/api";
import PokemonType from "../../Types/PokemonType";
import PokemonDetails from "../../Types/PokemonDetails";

// eslint-disable-next-line prefer-const
let offset = 0;

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

const initialState: PokemonDetails[] = [];

const pokemonSlice = createSlice({
  name: "pokemons",
  initialState: {pokemons: initialState, loading: false},
  reducers: {
    showPokemons: (state, action: PayloadAction<PokemonDetails>) => {
      state.pokemons.push({...action.payload});
      return state;
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

export const {showPokemons} = pokemonSlice.actions;
export default pokemonSlice.reducer;
