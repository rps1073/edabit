const findMissingNumber = (arr) => {  
  for(let i = 1; i <= 10; i++){
    if(arr.indexOf(i) === -1){
      return i;
    }
  }
};

module.exports = findMissingNumber;