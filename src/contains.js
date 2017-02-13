var existy = require('./existy.js');
var isString = require('./isString.js');
var isArray = require('./isArray.js');

/**
 * check string or array contains the value.
 *
 * @param {String|Array} obj check object.
 * @param {*} val search value.
 * @returns {Boolean}
 */
module.exports = function(obj, val) {
  if (!existy(obj)) {
    return false;
  }
  if (isString(obj)) {
    return obj.indexOf(val) !== -1;
  }
  if (isArray(obj)) {
    return obj.indexOf(val) !== -1;
  }
  return false;
};
