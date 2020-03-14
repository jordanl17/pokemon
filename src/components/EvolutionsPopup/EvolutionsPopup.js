import React, { useState, useContext } from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

import HistoryIcon from "@material-ui/icons/History";

import PokemonTable from "../PokemonTable";
import PokemonListContext from "../PokemonListContext";
import pokemonPropTypes from "../../pokemonPropTypes";

const EvolutionsPopup = ({ pokemon }) => {
  const [open, setOpen] = useState(false);
  const { pokemons: allPokemons } = useContext(PokemonListContext);

  const togglePopup = () => setOpen(prevOpen => !prevOpen);

  /**
   * return only pokemons which are within the list
   * of this pokemons next evolutions
   * @param {pokemon}
   */
  const findNextEvolutionsPokemons = ({ num }) =>
    pokemon.next_evolution.map(({ num: nextNum }) => nextNum).includes(num);

  return (
    <React.Fragment>
      <Button
        data-testid="evolution-button"
        onClick={togglePopup}
        variant="contained"
      >
        <HistoryIcon />
      </Button>
      <Dialog open={open} onClose={togglePopup} maxWidth="md">
        <DialogTitle id="Next evolutions list">
          Next evolutions for {pokemon.name}
        </DialogTitle>
        <DialogContent>
          <PokemonTable
            isPopup={true}
            pokemons={allPokemons.filter(findNextEvolutionsPokemons)}
          />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

EvolutionsPopup.defaultProps = {
  pokemon: { next_evolution: undefined }
};

EvolutionsPopup.propTypes = {
  pokemon: pokemonPropTypes
};

export default EvolutionsPopup;
