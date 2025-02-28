const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numberStr = n.toString();
  let max =0;
  for (let i=0;i<numberStr.length;i++) {
  const res = numberStr.replace(numberStr[i], '');
      if(Number(res)>max) {
        max =Number(res);
      }
  }
  return (max);
}

module.exports = {
  deleteDigit
};
