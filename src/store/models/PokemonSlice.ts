import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import PokemonType from "../../Types/PokemonType";
import {api} from "../../services/api";

const initialState: PokemonType[] = [];

const getPokemons = createAsyncThunk("pokemons/getPokemons", async () => {
  try {
    const response = await api.get("/pokemon");

    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const pokemonSlice = createSlice({
  name: "pokemons",
  initialState: {pokemons: initialState, loading: false},
  reducers: {
    addPokemons: (state, action: PayloadAction<PokemonType>) => {
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

export {getPokemons};
export const {addPokemons} = pokemonSlice.actions;
export default pokemonSlice.reducer;
