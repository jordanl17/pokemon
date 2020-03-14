import { render, fireEvent } from "@testing-library/react";
import React from "react";

import TableHeader from "./TableHeader";

const defaultProps = {
  isPopup: false,
  onSort: jest.fn(),
  sorting: {
    column: "name",
    direction: "asc"
  }
};
const renderer = props =>
  render(
    <table>
      <TableHeader {...defaultProps} {...props} />
    </table>
  );

describe("TableHeader", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("should render all of the correct headers when not a popup table", () => {
    const { getByText } = renderer();

    getByText("Name");
    getByText("Number");
    getByText("Type");
    getByText("Height");
    getByText("Weight");
    getByText("Weaknesses");
    getByText("Next Evolution");
  });

  it("should render all of the correct headers when popup table", () => {
    const { getByText, queryByText } = renderer({ isPopup: true });

    getByText("Name");
    getByText("Number");
    getByText("Type");
    getByText("Height");
    getByText("Weight");
    getByText("Weaknesses");
    expect(queryByText("Next Evolution")).toBeNull(); // should not show next evolutions
  });

  it("should call the onSort prop when a column header is clicked on non popup table", () => {
    const { getByText } = renderer();

    const numberHeader = getByText("Number");
    fireEvent.click(numberHeader);

    expect(defaultProps.onSort).toHaveBeenCalledTimes(1);
    expect(defaultProps.onSort).toHaveBeenCalledWith("num");
  });

  it("should NOT call the onSort prop when a column header is clicked on popup table", () => {
    const { getByText } = renderer({ isPopup: true });

    const numberHeader = getByText("Number");
    fireEvent.click(numberHeader);

    expect(defaultProps.onSort).not.toHaveBeenCalled();
  });
});
