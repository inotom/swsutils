var existy = require('./existy');
var isString = require('./isString');
var isArguments = require('./isArguments');

/**
 * check empty value
 *
 * @param {*} val check value.
 * @return {Boolean}
 */
module.exports = function(val) {
  if (!existy(val)) {
    return true;
  }
  if (isString(val) ||
      Array.isArray(val) ||
      isArguments(val)) {
    return val.length === 0;
  }
  return Object.keys(val).length === 0;
};
