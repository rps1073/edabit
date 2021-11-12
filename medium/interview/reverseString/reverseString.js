const reverseString = (str) => {
  return str.split(' ').reverse().filter(word => word.length > 0).join(' ');
};

module.exports = reverseString;