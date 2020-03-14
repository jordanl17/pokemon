/**
 * If columnIndex is 1 - left align
 * Otherwise - right align
 *
 * @param {Number} columnIndex
 */
export const alignment = columnIndex =>
  columnIndex !== 1 ? "right" : undefined;
