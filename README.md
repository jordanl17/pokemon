This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Scripts

To start app run `npm start`

To run unit tests run `npm t`

To run cypress tests run `npm run cy:run`

To run cypress windowed app for testing run `npm run cy:open`

# UI

On page load a spinner will show with a darkened background whilst the table is prepared.

Once the table has loaded all pokemon will be displayed in ascending order as given by their Names. To invert the ordering, click on 'Name' column header. To order by ascending on any other column click on the column header. To invert this ordering, click again.

To view details on a pokemon's previous or next evolutions, click on the action button. A popup modal will appear allowing for detailed interrogation of the evolutions.

# Structure

The app is broken into directories for:

api: connecting to the json list and transforming the data for the react frontend

continers/PokemonList: Parent component handling all state and context management for the table view; performs api request and response handling

components: All componenets used throughout the list, split up per directory

helpers: Additional reused helper function for: aligning header text in table; filtering the columns in a table based on whether they are in popup or primary table; sorting the table

# Testing

`testing-library/react` is used for testing unit testing react components. Normal `jest` testing is used for testing helpers and api.

`cypress` is used for testing end-to-end. I had wished to mock the api response for these tests, such that they could perform integration tests, however cypress does not support the interception of `window.fetch` requests as are used in `api/getPokemon`.

Test coverage can be found when running `npm t`. Total coverage is:

- Statements: 67%
- Branch: 69%
- Functions: 60%
- Lines: 67%

This is lower than I would have hoped, however had time allowed I would have gone beyond just covering the critical paths. Much of this reduced coverage comes from the testing of the `EvolutionsPopup` and `PokemonTable`, however these have been tested thoroughly through `cypress`- `cypress` coverage is not reflected in the jest test coverage.

# Shortcomings
- The table is somewhat slow to load. I attribute this to the rendering of the action buttons as this requires considerable computation relative to the other static cells. My next tasks at this stage would have been to either implement lazy loading through a library such as `react-virtualized`, or to implement pagination of data.
- Filtering of list based on type or weaknesses - I would then go on to implement a filter dropdown option on these two columns, allowing for all results to be filtered based on one or multilpe of each
-
