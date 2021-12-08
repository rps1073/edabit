const findLetters = require("./findUniqueLetters");

describe("findLetters", () => {
  it("should take a string and returns an array of the letters that occur only once", () => {
    expect(findLetters("monopoly")).toEqual(["m", "n", "p", "l", "y"]);
  });
});