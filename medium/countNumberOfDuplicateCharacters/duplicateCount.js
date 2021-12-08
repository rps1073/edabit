const duplicateCount = (str) => {
  const charArray = [...str];
  
  const dupesArray = charArray.filter(char => charArray.indexOf(char) != charArray.lastIndexOf(char));

  dupesSet = new Set(dupesArray);
  return dupesSet.size;
}

module.exports = duplicateCount;