const reverseString = require("./reverseString");

describe("reverseString", () => {
  it("should reverse the string word by word, the first word will be the last, and so on.", () => {
    expect(reverseString(" the sky is blue")).toEqual("blue is sky the");
    expect(reverseString("hello   world!  ")).toEqual("world! hello");
    expect(reverseString("a good example")).toEqual("example good a");

  });
});