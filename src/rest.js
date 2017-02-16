var existy = require('./existy');
var isArray = require('./isArray');
var isString = require('./isString');

/**
 * return rest of Array from Array or String
 *
 * @param {Array|String} val pickedup source value.
 * @returns {Array}
 */
module.exports = function(val) {

  if (!existy(val) || (!isArray(val) && !isString(val))) {
    return;
  }

  var elems = isString(val) ? val.split('') : val;
  var len = elems.length;
  if (len > 1) {
    return elems.slice(1);
  }
  return [];
};
