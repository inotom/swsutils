var existy = require('./existy.js');

/**
 * check value is Array
 *
 * @param {*} val check value.
 * @returns {Boolean}
 */
module.exports = function(val) {
  if (!existy(Array.isArray)) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  }
  return Array.isArray(val);
};
