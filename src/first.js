var isArray = require('./isArray');
var isString = require('./isString');

/**
 * pickup first element from Array or String
 *
 * @param {Array|String} val pickedup source value.
 * @returns {any}
 */
module.exports = function(val) {
  if (isArray(val) && val.length > 0) {
    return val[0];
  }
  if (isString(val) && val.length > 0) {
    return val.substr(0, 1);
  }
  return;
};
