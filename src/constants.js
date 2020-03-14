export const URLS = {
  getPokemon:
    "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
};

export const SORTING = {
  string: "string",
  array: "array"
};

// ordered as according to view ordering
export const TABLE_COLS = [
  { name: "img", popupVisible: true },
  { displayName: "Name", name: "name", popupVisible: true },
  { displayName: "Number", name: "num", popupVisible: true },
  { displayName: "Type", name: "type", popupVisible: true },
  { displayName: "Height", name: "height", popupVisible: true },
  { displayName: "Weight", name: "weight", popupVisible: true },
  { displayName: "Weaknesses", name: "weaknesses", popupVisible: true },
  { displayName: "Next Evolution", name: "next_evolution" },
  { displayName: "Previous Evolution", name: "prev_evolution" }
];

export const SORT_DIRECTION = {
  asc: "asc",
  desc: "desc"
};
