import React from "react";
import PropTypes from "prop-types";

import MUITableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Avatar from "@material-ui/core/Avatar";

import EvolutionsPopup from "../EvolutionsPopup";

import determineRelevantColumns from "../../helpers/columnFilter";
import { alignment } from "../../helpers/alignment";
import pokemonPropTypes from "../../pokemonPropTypes";

const NEXT_EVOLUTION = "next_evolution";

const renderCell = (pokemon, cellName) => {
  /**
   * if currently rendering the next evolution cell, and this pokemon has a next evolution value
   * - show the button
   */
  if (cellName === NEXT_EVOLUTION && pokemon[NEXT_EVOLUTION]) {
    return <EvolutionsPopup pokemon={pokemon} />;
  }
  if (Array.isArray(pokemon[cellName])) {
    // if cell data is an array split each el onto a new line
    return pokemon[cellName].map(item => <div key={item}>{item}</div>);
  }

  if (cellName === "img") {
    return <Avatar alt={pokemon.name} src={pokemon.img} />;
  }
  return pokemon[cellName];
};

const TableRow = ({ isPopup, pokemon }) => (
  <MUITableRow key={pokemon.num}>
    {determineRelevantColumns(isPopup).map(({ name: cellName }, index) => (
      <TableCell
        data-testid={`pokemon-${cellName}`}
        component="th"
        scope="row"
        align={alignment(index)}
        key={cellName}
      >
        {renderCell(pokemon, cellName)}
      </TableCell>
    ))}
  </MUITableRow>
);

TableRow.propTypes = {
  isPopup: PropTypes.bool.isRequired,
  pokemon: pokemonPropTypes
};

export default TableRow;
