import React from "react";

import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";

import PokemonTable from "../../components/PokemonTable";
import PokemonListContext from "../../components/PokemonListContext";

import getPokemons from "../../api/getPokemon";
import sorter from "../../helpers/sorting";

import { SORT_DIRECTION } from "../../constants";

class PokemonList extends React.Component {
  state = {
    isFetching: true,
    isError: false,
    pokemons: []
  };

  componentDidMount() {
    getPokemons()
      .then(pokemons =>
        this.setState({
          isFetching: false,
          isError: false,
          pokemons,
          sorting: { column: "name", direction: SORT_DIRECTION.asc }
        })
      )
      .catch(err => this.setState({ isFetching: false, isError: err.message }));
  }

  onSort = sortedBy => {
    const { sorting, pokemons } = this.state;
    /**
     * Sort ascending if not already sorting by column, or already sorting
     * by column in descending
     */
    const direction =
      sorting.column !== sortedBy || sorting.direction === SORT_DIRECTION.desc
        ? SORT_DIRECTION.asc
        : SORT_DIRECTION.desc;

    const sortedPokemons = pokemons.sort(sorter(sortedBy, direction));

    this.setState({
      pokemons: sortedPokemons,
      sorting: {
        column: sortedBy,
        direction
      }
    });
  };

  render() {
    const { pokemons, sorting, isFetching, isError } = this.state;

    if (isError) return <div>An error occurred in loading: {isError}</div>;

    if (isFetching)
      return (
        <Backdrop open={isFetching}>
          <CircularProgress />
        </Backdrop>
      );

    return (
      <PokemonListContext.Provider value={{ pokemons }}>
        <PokemonTable
          pokemons={pokemons}
          onSort={this.onSort}
          sorting={sorting}
        />
      </PokemonListContext.Provider>
    );
  }
}

export default PokemonList;
