const removeDuplicates = require("./removeDuplicatesFromArray");

describe("removeDuplicates", ()=> {
  it("should take an array of items, removes all duplicates, returns a new array in same sequence", ()=> {
    expect(removeDuplicates([0,0,1,2])).toEqual([0,1,2]);
    expect(removeDuplicates(["The", "big", "cat"])).toEqual(["The", "big", "cat"]);
    expect(removeDuplicates(["John", "Taylor", "John"])).toEqual(["John", "Taylor"]);
  });
});