var isArray = require('./isArray');
var isString = require('./isString');

/**
 * pickup last element from Array or String
 *
 * @param {Array|String} val pickedup source value.
 * @returns {any}
 */
module.exports = function(val) {
  if (isArray(val)) {
    var aryLen = val.length;
    if (aryLen > 0) {
      return val[aryLen - 1];
    }
  }
  if (isString(val)) {
    var strLen = val.length;
    if (strLen > 0) {
      return val.substr(strLen - 1, 1);
    }
  }
  return;
};
