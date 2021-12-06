const nameScore = require("./nameScore");

describe("nameScore", () => {
  it("should function that takes a string of name and checks how much good is the given name. Add up the letters of your name to get the total score.", () => {
    expect(nameScore("MUBASHIR")).toEqual("THE BEST");
    expect(nameScore("YOU")).toEqual("VERY GOOD");
    expect(nameScore("MATT")).toEqual("THE BEST");
    expect(nameScore("PUBG")).toEqual("NOT TOO GOOD");
    expect(nameScore("ME")).toEqual("PRETTY GOOD");
    expect(nameScore("BILL GATES")).toEqual("THE BEST");

  });
});