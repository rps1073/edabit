const numbersToObjects = require("./numbersToObject");

describe("numbersToObjects", () => {
  it("should take an array, create an object aganst each given number where the object key is the number converted string and the object value will be the corresponding character code string", () => {
    expect(numbersToObjects([118, 117, 120])).toEqual([{'118':'v'}, {'117':'u'}, {'120':'x'}]);
    expect(numbersToObjects([101, 121, 110, 113, 103])).toEqual([{'101':'e'}, {'121':'y'}, {'110':'n'}, {'113':'q'}, {'103':'g'}]);
    expect(numbersToObjects([118, 103, 110])).toEqual([{"118":"v"}, {"103":"g"}, {"110":"n"}]);
  });
});