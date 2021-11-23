const mumblingChallenge = require("./mumblingChallenge");

describe("mumblingChallenge", () => {
  it("should take a string, seperate the string into characters, and repeat the character based on its position in the string", () => {
    expect(mumblingChallenge("MubAshIr")).toEqual("M-Uu-Bbb-Aaaa-Sssss-Hhhhhh-Iiiiiii-Rrrrrrrr");
    expect(mumblingChallenge("EdaBit")).toEqual("E-Dd-Aaa-Bbbb-Iiiii-Tttttt");
  });
})