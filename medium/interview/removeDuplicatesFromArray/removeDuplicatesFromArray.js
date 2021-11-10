const removeDuplicates = (arr) => {
  console.log(arr);
  const uniques = new Set(arr);
  const uniqueArray = Array.from(uniques);


  return uniqueArray;
}

module.exports = removeDuplicates;