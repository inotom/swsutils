var existy = require('./existy');

/**
 * check value is true
 *
 * @param {*} val check value.
 * @return {Boolean}
 */
module.exports = function(val) {
  return val !== false && existy(val);
};
