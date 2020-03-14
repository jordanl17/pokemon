import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";

import TableHeader from "../../components/TableHeader";
import TableRow from "../../components/TableRow";

import pokemonPropTypes from "../../pokemonPropTypes";

// styles necessary for sticky header
const styles = {
  root: {
    width: "100%"
  },
  container: {
    maxHeight: "100vh"
  }
};

class PokemonTable extends React.Component {
  render() {
    const { pokemons, isPopup, onSort, sorting, classes } = this.props;

    return (
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="pokemonTable">
            <TableHeader isPopup={isPopup} onSort={onSort} sorting={sorting} />
            <TableBody>
              {pokemons.map(pokemon => (
                <TableRow
                  pokemon={pokemon}
                  key={pokemon.id}
                  isPopup={isPopup}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    );
  }
}

PokemonTable.defaultProps = {
  isPopup: false,
  onSort: null,
  sorting: null
};

PokemonTable.propTypes = {
  pokemons: PropTypes.arrayOf(pokemonPropTypes).isRequired,
  isPopup: PropTypes.bool,
  onSort: PropTypes.func,
  sorting: PropTypes.object,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PokemonTable);
