const existy = require('./existy');
const isString = require('./isString');
const isArguments = require('./isArguments');

/**
 * check empty value
 *
 * @param {*} val check value.
 * @return {Boolean}
 */
module.exports = (val) => {
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
