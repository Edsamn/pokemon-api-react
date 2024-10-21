import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {api} from "../../services/api";
import PokemonDetails from "../../Types/PokemonDetails";

export const getPokemonDetails = createAsyncThunk<PokemonDetails, number>(
  "pokemons/getPokemonDetails",
  async (id: number) => {
    try {
      const response = await api.get(`/pokemon/${id}`);

      return response.data as PokemonDetails;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState: PokemonDetails = {
  abilities: [
    {
      ability: {
        name: "",
        url: "",
      },
      is_hidden: false,
      slot: 0,
    },
  ],
  base_experience: 0,
  forms: [
    {
      name: "",
      url: "",
    },
  ],
  game_indices: [
    {
      game_index: 0,
      version: {
        name: "",
        url: "",
      },
    },
  ],
  height: 0,
  held_items: [],
  id: 0,
  is_default: false,
  location_area_encounters: "",
  moves: [
    {
      move: {
        name: "",
        url: "",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "",
            url: "",
          },
          version_group: {
            name: "",
            url: "",
          },
        },
      ],
    },
  ],
  name: "",
  order: 0,
  species: {
    name: "",
    url: "",
  },
  sprites: {
    front_default: "",
  },
  stats: [
    {
      base_stat: 0,
      effort: 0,
      stat: {
        name: "",
        url: "",
      },
    },
  ],
  types: [
    {
      slot: 0,
      type: {
        name: "",
        url: "",
      },
    },
  ],
  weight: 0,
  cries: {
    latest: "",
    legacy: "",
  },
  past_abilities: [],
  past_types: [],
};

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
