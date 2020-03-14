import columnFilter from "./columnFilter";

describe("columnFilter", () => {
  it("should return all columns when viewed not in a popup", () => {
    const result = columnFilter(false);
    expect(result).toEqual([
      { name: "img", popupVisible: true },
      { displayName: "Name", name: "name", popupVisible: true },
      { displayName: "Number", name: "num", popupVisible: true },
      { displayName: "Type", name: "type", popupVisible: true },
      { displayName: "Height", name: "height", popupVisible: true },
      { displayName: "Weight", name: "weight", popupVisible: true },
      { displayName: "Weaknesses", name: "weaknesses", popupVisible: true },
      { displayName: "Next Evolution", name: "next_evolution" }
    ]);
  });

  it("should return only popup columns when viewed in a popup", () => {
    const result = columnFilter(true);
    expect(result).toEqual([
      { name: "img", popupVisible: true },
      { displayName: "Name", name: "name", popupVisible: true },
      { displayName: "Number", name: "num", popupVisible: true },
      { displayName: "Type", name: "type", popupVisible: true },
      { displayName: "Height", name: "height", popupVisible: true },
      { displayName: "Weight", name: "weight", popupVisible: true },
      { displayName: "Weaknesses", name: "weaknesses", popupVisible: true }
    ]);
  });
});
