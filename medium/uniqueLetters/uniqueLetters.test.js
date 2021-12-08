const uniqueLetters = require("./uniqueLetters");

describe("uniqueLetters", () => {
  it("should take a string and returns an array of the letters that occur only once.", () => {
    expect(uniqueLetters("monopoly")).toEqual(["m", "n", "p", "l", "y"]);
  });
})