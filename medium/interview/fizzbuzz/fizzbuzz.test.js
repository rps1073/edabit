const fizzbuzz = require("./fizzbuzz");

describe("fizzbuzz", () => {
  it("should returns array of all the numbers from 1 to an integer argument. But for multiples of three use “Fizz” instead of the number and for the multiples of five use “Buzz”. For numbers which are multiples of both three and five use “FizzBuzz”.", () => {
    expect(fizzbuzz(5)).toEqual([1, 2, "Fizz", 4, "Buzz"]);
    expect(fizzbuzz(10)).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"]);
    expect(fizzbuzz(15)).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]);
  });
});