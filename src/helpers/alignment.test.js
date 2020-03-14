import { alignment } from "./alignment";

describe("alignment", () => {
  it("should return undefined for index zero", () => {
    const result = alignment(0);
    expect(result).toBeUndefined();
  });

  it("should return right for non zero index", () => {
    const result = alignment(2);
    expect(result).toEqual("right");
  });
});
