const mumblingChallenge = (str) => {
  const strArray = [...str.toLowerCase()];

  const repeated = strArray.map((element, index) => element.toUpperCase() + element.repeat(index));
  const repeatedString = repeated.join("-");
  
  return repeatedString;
}

module.exports = mumblingChallenge;