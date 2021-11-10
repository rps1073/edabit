const checkForAnagrams = require("./checkForAnagrams");

describe("checkForAnagrams", () => {
  it("should take two strings and returns either true or false depending on whether they're anagrams or not", () => {
    expect(checkForAnagrams("cristian", "Cristina")).toEqual(true);
    expect(checkForAnagrams("Dave Barry", "Ray Adverb")).toEqual(true);
    expect(checkForAnagrams("Nope", "Note")).toEqual(false);
  });
});