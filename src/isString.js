/**
 * check value is string
 *
 * @param {*} val check value.
 * @return {Boolean}
 */
module.exports = function(val) {
  return toString.call(val) === '[object String]';
};
