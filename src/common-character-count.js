const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2 ) {
  const count1 = countChars(s1);
  const count2 = countChars(s2);
  let commonCount = 0;
  for (const char in count1) {
    if (char in count2) {
      commonCount += Math.min(count1[char], count2[char]);
    }
  }
  return commonCount;
}

function countChars(str) {
  const count = {};
  for (const char of str) {
    if (char in count) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
