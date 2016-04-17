const existy = require('./existy');

/**
 * check value is true
 *
 * @param {*} val check value.
 * @return {Boolean}
 */
module.exports = (val) => {
  return val !== false && existy(val);
};
