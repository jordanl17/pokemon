import { alignment } from "./alignment";

describe("alignment", () => {
  it("should return undefined for index 1", () => {
    const result = alignment(1);
    expect(result).toBeUndefined();
  });

  it("should return right for index other than 1", () => {
    let result = alignment(0);
    expect(result).toEqual("right");

    result = alignment(2);
    expect(result).toEqual("right");
  });
});
