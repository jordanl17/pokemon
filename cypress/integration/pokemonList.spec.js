import { waitFor } from "@testing-library/dom";

function initApp() {
  cy.server();

  cy.visit("http://localhost:3001");
}

const firstInListMatches = matchingName =>
  cy
    .findAllByTestId("pokemon-name")
    .first()
    .within(() => cy.findByText(matchingName));

describe("PokemonList", () => {
  beforeEach(initApp);

  it("sorting should correctly order the list", () => {
    // wait for app to load
    cy.findByText("Name");

    firstInListMatches("Abra"); // default ordered by ascending name

    cy.findByText("Name").click(); // invert name sorting

    firstInListMatches("Zubat"); // list in opposite order

    cy.findByText("Weight").click(); // order by ascending weight

    firstInListMatches("Haunter"); // smallest weight first
  });

  it("should display the correct next evolutions", () => {
    // wait for app to load
    cy.findByText("Name");

    const firstRow = cy
      .findAllByTestId("pokemon-name")
      .first()
      .parent();
    const evolutionButton = firstRow.within(() =>
      cy.findByTestId("evolution-button")
    );
    // click the first row's evolution button
    evolutionButton.click();

    const popup = cy.findByRole("dialog");

    // expect the popup to include the correct pokemon evolutions
    popup.within(() => {
      cy.findByText("Alakazam");
      cy.findByText("Kadabra");
    });
  });
});
