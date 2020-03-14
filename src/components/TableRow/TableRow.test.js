import React from "react";
import { render } from "@testing-library/react";

import TableRow from "./TableRow";

const defaultProps = {
  isPopup: false,
  pokemon: {
    name: "test name",
    num: "test num",
    type: "test type",
    weight: "test weight",
    height: "test height"
  }
};
const renderer = props =>
  render(
    <table>
      <tbody>
        <TableRow {...defaultProps} {...props} />
      </tbody>
    </table>
  );
describe("TableRow", () => {
  it("should render the correct rows when displaying a non popup table", () => {
    const { getByText } = renderer({ isPopup: true });

    getByText("test name");
    getByText("test num");
    getByText("test type");
    getByText("test weight");
    getByText("test height");
  });

  it("shouldn't render a next evolution button when there are no next evolutions on this pokemon", () => {
    const { queryByTestId } = renderer();

    expect(queryByTestId("evolution-button")).toBeNull();
  });

  it("shouldn't render a next evolution button when pokemon has next evolution but table is as popup", () => {
    const { queryByTestId } = renderer({
      isPopup: true,
      pokemon: {
        next_evolutions: "test next"
      }
    });

    expect(queryByTestId("evolution-button")).toBeNull();
  });

  it("should render next evolutions button when there is a next evolution on this pokemon", () => {
    const { queryByTestId } = renderer({
      pokemon: { next_evolutions: "test next" }
    });

    queryByTestId("evolution-button");
  });

  it("should render an array cell as a series of divs", () => {
    const { getByText } = renderer({
      pokemon: { type: ["first type", "second type"] }
    });

    const typeCell = getByText("first type").parentElement;
    expect(typeCell).toMatchSnapshot();
  });
});
