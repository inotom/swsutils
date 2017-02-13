var existy = require('./existy.js');
var isArray = require('./isArray');

/**
 * check value is Object
 *
 * @param {*} val check value.
 * @returns {Boolean}
 */
module.exports = function(val) {
  if (!existy(val)) {
    return false;
  }
  if (isArray(val)) {
    return false;
  }
  return typeof val === 'object';
};
