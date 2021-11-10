const findMissingNumber = require("./findMissingNumber");

describe("findMissingNumber", () => {
  it("should take an array of numbers between 1 and 10 (excluding one number) and returns the missing number.", () => {
    expect(findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10])).toEqual(5);
    expect(findMissingNumber([7, 2, 3, 6, 5, 9, 1, 4, 8])).toEqual(10);
    expect(findMissingNumber([10, 5, 1, 2, 4, 6, 8, 3, 9])).toEqual(7);
  });
});