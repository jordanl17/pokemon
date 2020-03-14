import getPokemon from "./getPokemon";

let mockedFetch = jest.fn();
global.fetch = mockedFetch;

const mockedPokemons = [
  {
    id: "test id 1",
    name: "test name 1",
    num: "test num 1",
    height: "test height 1",
    weight: "test weight 1",
    weaknesses: "test weaknesses 1",
    next_evolution: "test next_evolution 1"
  },
  {
    id: "test id 2",
    name: "test name 2",
    num: "test num 2",
    height: "test height 2",
    weight: "test weight 2",
    weaknesses: "test weaknesses 2",
    next_evolution: "test next_evolution 2"
  },
  {
    id: "test id 3",
    img: "test img"
  }
];

describe("getPokemon", () => {
  describe("successful get response", () => {
    let fetchJsonMock;

    beforeEach(() => {
      fetchJsonMock = jest.fn();
      mockedFetch.mockReturnValue(
        Promise.resolve({ status: 200, json: fetchJsonMock })
      );
    });

    describe("with pokemon returned", () => {
      beforeEach(() => {
        fetchJsonMock.mockReturnValue({ pokemon: mockedPokemons });
      });

      it("should make correct fetch call", async () => {
        await getPokemon();

        expect(
          mockedFetch
        ).toHaveBeenCalledWith(
          "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json",
          { method: "GET" }
        );
      });

      it("should call fetch json method", async () => {
        await getPokemon();

        expect(fetchJsonMock).toHaveBeenCalledTimes(1);
      });

      it("should sort and return the correct data", async () => {
        const result = await getPokemon();

        expect(result).toEqual([
          {
            height: undefined,
            id: "test id 3",
            name: undefined,
            next_evolution: undefined,
            num: undefined,
            type: undefined,
            weaknesses: undefined,
            weight: undefined,
            img: "test img"
          },
          {
            height: "test height 1",
            id: "test id 1",
            name: "test name 1",
            next_evolution: "test next_evolution 1",
            num: "test num 1",
            type: undefined,
            weaknesses: "test weaknesses 1",
            weight: "test weight 1",
            img: undefined
          },
          {
            height: "test height 2",
            id: "test id 2",
            name: "test name 2",
            next_evolution: "test next_evolution 2",
            num: "test num 2",
            type: undefined,
            weaknesses: "test weaknesses 2",
            weight: "test weight 2",
            img: undefined
          }
        ]);
      });
    });

    describe("with valid json but no pokemon returned", () => {
      beforeEach(() => {
        fetchJsonMock.mockReturnValue({ key: "value" });
      });

      it("should return empty array", async () => {
        const result = await getPokemon();

        expect(result).toEqual([]);
      });
    });

    describe("with invalid json returned", () => {
      beforeEach(() => {
        fetchJsonMock.mockImplementationOnce(() => {
          throw Error("invalid parse");
        });
      });

      it("should throw an error", async () => {
        try {
          await getPokemon();
        } catch (e) {
          expect(e.message).toEqual("invalid parse");
        }
      });
    });
  });

  describe("with failed request", () => {
    it("should return an error with the defined error message", async () => {
      mockedFetch.mockReturnValueOnce(Promise.reject(new Error("test error")));

      try {
        await getPokemon();
      } catch (err) {
        expect(err.message).toEqual("test error");
      }
    });
  });

  describe("with unsuccessful response", () => {
    it("should return an error with the defined error message if there is one", async () => {
      mockedFetch.mockReturnValueOnce(
        Promise.resolve({ status: 123, statusText: "test error" })
      );

      try {
        await getPokemon();
      } catch (err) {
        expect(err.message).toEqual("test error");
      }
    });

    it("should return default error when there is no status message", async () => {
      mockedFetch.mockReturnValueOnce(Promise.resolve({ status: 123 }));

      try {
        await getPokemon();
      } catch (err) {
        expect(err.message).toEqual("unknown error");
      }
    });
  });
});
