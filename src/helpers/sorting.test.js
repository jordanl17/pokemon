import sorter from "./sorting";

describe("sorting", () => {
  it("should define the sort result on a self defined list", () => {
    const list = [
      { test: "d", thing: "stuff" },
      { other: "thing", test: "w" },
      { test: "c" },
      { other: "stuff" }
    ];

    const ascendingSortedResult = [...list].sort(sorter("test", "asc"));
    expect(ascendingSortedResult).toEqual([
      { other: "stuff" },
      { test: "c" },
      { test: "d", thing: "stuff" },
      { other: "thing", test: "w" }
    ]);

    const descendingSortedResult = [...list].sort(sorter("test", "desc"));
    expect(descendingSortedResult).toEqual([
      { other: "thing", test: "w" },
      { test: "d", thing: "stuff" },
      { test: "c" },
      { other: "stuff" }
    ]);
  });
});
