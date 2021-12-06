const threeArrays = require("./threeArrays");

describe("threeArrays", () => {
  it("should return the sum of integers which are common in all three arrays", () => {
    expect(threeArrays([1, 2, 3], [5, 3, 2], [7, 3, 2])).toEqual(5);
    expect(threeArrays([1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2])).toEqual(7);
    expect(threeArrays([1], [1], [2])).toEqual(1);
  })
});