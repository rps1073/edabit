const threeArrays = (arr1, arr2, arr3) => {
  return arr1.map(x => {
    if (arr2.includes(x) && arr3.includes(x)) {
        arr2[arr2.indexOf(x)] = 0;
        arr3[arr3.indexOf(x)] = 0;
        return x;
    } else return 0;
}).reduce((a,b) => a + b, 0)
}

module.exports = threeArrays;