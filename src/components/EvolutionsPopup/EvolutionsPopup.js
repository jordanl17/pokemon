import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

import ForwardIcon from "@material-ui/icons/Forward";
import ReplayIcon from "@material-ui/icons/Replay";

import PokemonTable from "../PokemonTable";
import PokemonListContext from "../PokemonListContext";
import pokemonPropTypes from "../../pokemonPropTypes";

const PREV_EVOLUTION = "prev_evolution";

const EvolutionsPopup = ({ pokemon, evolutionType }) => {
  const [open, setOpen] = useState(false);
  const { pokemons: allPokemons } = useContext(PokemonListContext);

  const togglePopup = () => setOpen(prevOpen => !prevOpen);
  const pokemonEvolutionNumbers = pokemon[evolutionType].map(({ num }) => num);
  /**
   * return only pokemons which are within the list
   * of this pokemons evolutions
   * @param {pokemon}
   */
  const findEvolutionsPokemons = ({ num }) =>
    pokemonEvolutionNumbers.includes(num);

  return (
    <React.Fragment>
      <Button
        data-testid="evolution-button"
        onClick={togglePopup}
        variant="contained"
      >
        {evolutionType === PREV_EVOLUTION ? <ReplayIcon /> : <ForwardIcon />}
      </Button>
      <Dialog open={open} onClose={togglePopup} maxWidth="md">
        <DialogTitle id="Evolutions list">
          Evolutions for {pokemon.name}
        </DialogTitle>
        <DialogContent>
          <PokemonTable
            isPopup={true}
            pokemons={allPokemons.filter(findEvolutionsPokemons)}
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
  pokemon: pokemonPropTypes,
  evolutionType: PropTypes.oneOf(["prev_evolution", "next_evolution"])
    .isRequired
};

export default EvolutionsPopup;
