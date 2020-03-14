import sorter from "../helpers/sorting";
import { URLS, SORT_DIRECTION } from "../constants";

const pokemonTransform = ({
  id,
  name,
  num,
  type,
  height,
  weight,
  weaknesses,
  next_evolution
}) => ({ id, name, num, type, height, weight, weaknesses, next_evolution });

const getPokemon = () =>
  fetch(URLS.getPokemon, {
    method: "GET"
  })
    .then(response => {
      try {
        if (response.status === 200) return response.json();
        throw response;
      } catch (e) {
        throw Error(response.statusText || e.message || "unknown error");
      }
    })
    .then(({ pokemon = [] }) =>
      pokemon.map(pokemonTransform).sort(sorter("name", SORT_DIRECTION.asc))
    );

export default getPokemon;
