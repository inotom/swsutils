const isUndefined = require('./isUndefined');

/**
 * pickup value or defaultValue
 *
 * @param {*} value
 * @param {*} defaultValue return this value if value is undefined.
 * @return {*}
 */
module.exports = (value, defaultValue) => {
  return isUndefined(value) ? defaultValue : value;
};
