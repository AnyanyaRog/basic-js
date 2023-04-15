const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains ) {
  let count = {};
 for (let i=0;i<domains.length;i++) {
  let site = domains[i].split('.').reverse()
  let current = '';
  for (const char of site) {
    current += `.${char}`;
    if (current in count) {
      count[current]++;
    }  else {
      count[current] = 1;
    }

   
  }
 }
 return count;
}

module.exports = {
  getDNSStats
};
