var isUndefined = require('./isUndefined');
var isNull = require('./isNull');

/**
 * exist value.
 * value is not undefined and null.
 *
 * @param {*} val check value.
 * @return {Boolean}
 */
module.exports = function(val) {
  return !isUndefined(val) && !isNull(val);
};
