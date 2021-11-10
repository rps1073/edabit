const checkForAnagrams = (s1, s2) => {
  const s1Formatted = s1.toLowerCase().split('').sort().join('').trim();
  const s2Formatted = s2.toLowerCase().split('').sort().join('').trim();

  const isAnagram = s1Formatted === s2Formatted;

  return isAnagram;
};

module.exports = checkForAnagrams;