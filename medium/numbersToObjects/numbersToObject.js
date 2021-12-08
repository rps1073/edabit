const numbersToObjects = (numsArr) => {
  let objArray = [];

  for(num of numsArr){
    let obj = {};
    
    const objKey = num;
    const objValue = String.fromCharCode(num);

    obj[objKey] = objValue;

    objArray.push(obj);
  }

  return objArray;
};

module.exports = numbersToObjects;