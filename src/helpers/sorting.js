import { SORT_DIRECTION } from "../constants";

const ascendingOrderSort = (A = "", B = "") => {
  const a = String(A).toLowerCase();
  const b = String(B).toLowerCase();

  if (b < a) {
    return 1;
  }
  if (b > a) {
    return -1;
  }
  return 0;
};

const sorter = (sortBy, direction) => ({ [sortBy]: a }, { [sortBy]: b }) =>
  direction === SORT_DIRECTION.asc
    ? ascendingOrderSort(a, b)
    : -ascendingOrderSort(a, b);

export default sorter;
