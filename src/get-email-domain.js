const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
 let str = email.split("@")
if (str.length == 3) {
  return str[2]
} else
 return str[1]
}

module.exports = {
  getEmailDomain
};
