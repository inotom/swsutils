var isString = require('./isString');
var isArray = require('./isArray');
var isObject = require('./isObject');

/**
 * return String, Array, Object elements size.
 *
 * @param {String|Array|Object} val check value.
 * @returns {Number}
 */
module.exports = function(val) {
  if (isString(val) || isArray(val)) {
    return val.length;
  }
  if (isObject(val)) {
    return Object.keys(val).length;
  }
  return 0;
};
