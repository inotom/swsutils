const isUndefined = require('./isUndefined');
const isNull = require('./isNull');

/**
 * exist value.
 * value is not undefined and null.
 *
 * @param {*} val check value.
 * @return {Boolean}
 */
module.exports = (val) => {
  return !isUndefined(val) && !isNull(val);
};
