const duplicateCount = require("./duplicateCount");

describe("duplicateCount", () => {
  it("should take a string and returns the number of alphanumeric characters that occur more than once", () => {
    expect(duplicateCount("abcde")).toEqual(0);
    expect(duplicateCount("aabbcde")).toEqual(2);
  });
});