import { SORT_DIRECTION } from "../constants";

const string = data => String(data).toLowerCase();
const number = data => Number(data.split(" ")[0]);

const typeConversions = {
  name: string,
  num: number,
  type: string,
  height: number,
  weight: number,
  weaknesses: string,
  next_evolution: string,
  prev_evolution: string
};

const ascendingOrderSort = (sortBy, a = "", b = "") => {
  const typedA = typeConversions[sortBy](a);
  const typedB = typeConversions[sortBy](b);

  if (typedB < typedA) {
    return 1;
  }
  if (typedB > typedA) {
    return -1;
  }
  return 0;
};

const sorter = (sortBy, direction) => ({ [sortBy]: a }, { [sortBy]: b }) =>
  direction === SORT_DIRECTION.asc
    ? ascendingOrderSort(sortBy, a, b)
    : -ascendingOrderSort(sortBy, a, b);

export default sorter;
