const findLetters = (str) => {
  const charArray = [...str];

  return charArray.filter(char => charArray.indexOf(char) === charArray.lastIndexOf(char));
};

module.exports = findLetters;