import React from "react";
import PropTypes from "prop-types";

import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableSortLabel from "@material-ui/core/TableSortLabel";

import { SORT_DIRECTION } from "../../constants";
import { alignment } from "../../helpers/alignment";
import determineRelevantColumns from "../../helpers/columnFilter";

const TableHeader = ({ isPopup, onSort, sorting }) => {
  const onSortHandler = property => () => onSort(property);

  return (
    <TableHead>
      <TableRow>
        {determineRelevantColumns(isPopup).map((column, index) => (
          <TableCell key={column.name} align={alignment(index)}>
            {!isPopup ? (
              <TableSortLabel
                active={column.name === sorting.column}
                direction={
                  column.name === sorting.column
                    ? sorting.direction
                    : SORT_DIRECTION.asc
                }
                onClick={onSortHandler(column.name)}
              >
                {column.displayName}
              </TableSortLabel>
            ) : (
              column.displayName
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

TableHeader.defaultProps = {
  onSort: null,
  sorting: null
};

TableHeader.propTypes = {
  isPopup: PropTypes.bool.isRequired,
  onSort: PropTypes.func,
  sorting: PropTypes.object
};

export default TableHeader;
