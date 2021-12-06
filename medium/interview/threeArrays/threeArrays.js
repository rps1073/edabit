const threeArrays = (arr1, arr2, arr3) => {
  const arr2matches = arr2.map(num => arr1.includes(num) ? num: 0);
  const arr3matches = arr2matches.map(num => arr2matches.includes(num) ? num : 0);

  const sumCommon = arr3matches.reduce((previous, current) => previous + current);
  return sumCommon;
}

module.exports = threeArrays;