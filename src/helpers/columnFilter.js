import { TABLE_COLS } from "../constants";

/**
 * if table is in popup, only show the popup columns
 * otherwise, show all the columns
 * @param {Boolean} isPopup
 */
const determineRelevantColumns = isPopup =>
  TABLE_COLS.filter(({ popupVisible }) => (isPopup ? popupVisible : true));

export default determineRelevantColumns;
