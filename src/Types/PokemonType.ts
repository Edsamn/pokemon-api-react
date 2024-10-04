interface PokemonType {
  abilities: [
    {
      ability: {
        name: string;
        url: string;
      };
      is_hidden: boolean;
      slot: number;
    }
  ];
  base_experience: number;
  cries: {
    latest: string;
    legacy: string;
  };
  forms: [
    {
      name: string;
      url: string;
    }
  ];
  game_indices: [
    {
      game_index: number;
      version: {
        name: string;
        url: string;
      };
    }
  ];
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: [
    {
      move: {
        name: string;
        url: string;
      };
      version_group_details: [
        {
          level_learned_at: number;
          move_learn_method: {
            name: string;
            url: string;
          };
          version_group: {
            name: string;
            url: string;
          };
        }
      ];
    }
  ];
  name: string;
  order: number;
  past_abilities: [];
  past_types: [];
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string;
    back_female: null;
    back_shiny: string;
    back_shiny_female: null;
    front_default: string;
    front_female: null;
    front_shiny: string;
    front_shiny_female: null;
    other: {
      dream_world: {
        front_default: string;
        front_female: null;
      };
      home: {
        front_default: string;
        front_female: null;
        front_shiny: string;
        front_shiny_female: null;
      };
      official_artwork: {
        front_default: string;
        front_shiny: string;
      };
      showdown: {
        back_default: string;
        back_female: null;
        back_shiny: string;
        back_shiny_female: null;
        front_default: string;
        front_female: null;
        front_shiny: string;
        front_shiny_female: null;
      };
    };
    versions: {
      generation_i: {
        red_blue: {
          back_default: string;
          back_gray: string;
          back_transparent: string;
          front_default: string;
          front_gray: string;
          front_transparent: string;
        };
        yellow: {
          back_default: string;
          back_gray: string;
          back_transparent: string;
          front_default: string;
          front_gray: string;
          front_transparent: string;
        };
      };
      generation_ii: {
        crystal: {
          back_default: string;
          back_shiny: string;
          back_shiny_transparent: string;
          back_transparent: string;
          front_default: string;
          front_shiny: string;
          front_shiny_transparent: string;
          front_transparent: string;
        };
        gold: {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
          front_transparent: string;
        };
        silver: {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
          front_transparent: string;
        };
      };
      generation_iii: {
        emerald: {
          front_default: string;
          front_shiny: string;
        };
        firered_leafgreen: {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
        };
        ruby_sapphire: {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
        };
      };
      generation_iv: {
        diamond_pearl: {
          back_default: string;
          back_female: null;
          back_shiny: string;
          back_shiny_female: null;
          front_default: string;
          front_female: null;
          front_shiny: string;
          front_shiny_female: null;
        };
        heartgold_soulsilver: {
          back_default: string;
          back_female: null;
          back_shiny: string;
          back_shiny_female: null;
          front_default: string;
          front_female: null;
          front_shiny: string;
          front_shiny_female: null;
        };
        platinum: {
          back_default: string;
          back_female: null;
          back_shiny: string;
          back_shiny_female: null;
          front_default: string;
          front_female: null;
          front_shiny: string;
          front_shiny_female: null;
        };
      };
      generation_v: {
        animated: {
          back_default: string;
          back_female: null;
          back_shiny: string;
          back_shiny_female: null;
          front_default: string;
          front_female: null;
          front_shiny: string;
          front_shiny_female: null;
        };
        back_default: string;
        back_female: null;
        back_shiny: string;
        back_shiny_female: null;
        front_default: string;
        front_female: null;
        front_shiny: string;
        front_shiny_female: null;
      };
      generation_vi: {
        omegaruby_alphasapphire: {
          front_default: string;
          front_female: null;
          front_shiny: string;
          front_shiny_female: null;
        };
        x_y: {
          front_default: string;
          front_female: null;
          front_shiny: string;
          front_shiny_female: null;
        };
      };
      generation_vii: {
        icons: {
          front_default: string;
          front_female: null;
        };
        ultra_sun_ultra_moon: {
          front_default: string;
          front_female: null;
          front_shiny: string;
          front_shiny_female: null;
        };
      };
      generation_viii: {
        icons: {
          front_default: string;
          front_female: null;
        };
      };
    };
  };
  stats: [
    {
      base_stat: number;
      effort: number;
      stat: {
        name: string;
        url: string;
      };
    }
  ];
  types: [
    {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }
  ];
  weight: number;
}

export default PokemonType;
