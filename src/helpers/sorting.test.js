import sorter from "./sorting";

describe("sorting", () => {
  it("should define the sort result on a self defined list", () => {
    const list = [
      { name: "d", thing: "stuff" },
      { other: "thing", name: "w" },
      { name: "c" },
      { other: "stuff" }
    ];

    const ascendingSortedResult = [...list].sort(sorter("name", "asc"));
    expect(ascendingSortedResult).toEqual([
      { other: "stuff" },
      { name: "c" },
      { name: "d", thing: "stuff" },
      { other: "thing", name: "w" }
    ]);

    const descendingSortedResult = [...list].sort(sorter("name", "desc"));
    expect(descendingSortedResult).toEqual([
      { other: "thing", name: "w" },
      { name: "d", thing: "stuff" },
      { name: "c" },
      { other: "stuff" }
    ]);
  });

  it("should sort a number correctly", () => {
    const list = [{ weight: "12.1 kg" }, {}, { weight: "111.1 kg" }];

    const result = [...list].sort(sorter("weight", "desc"));

    expect(result).toEqual([{ weight: "111.1 kg" }, { weight: "12.1 kg" }, {}]);
  });
});
