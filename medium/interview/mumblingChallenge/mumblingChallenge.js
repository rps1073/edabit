const mumblingChallenge = (str) => {
  const stringArray = str.toLowerCase().split("");

  const repeatedCharsArray = stringArray.map(char => char + char.repeat(stringArray.indexOf(char)));
  const upperCasedArray = repeatedCharsArray.map(str => str[0].toUpperCase() + str.substring(1) + "-");
  const concatenatedString = upperCasedArray.join("");
  const trimmedString = concatenatedString.substring(0, concatenatedString.length - 1);

  return trimmedString;
}

module.exports = mumblingChallenge;