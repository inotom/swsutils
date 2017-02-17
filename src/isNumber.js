/**
 * check value is number
 *
 * @param {*} val check value.
 * @return {Boolean}
 */
module.exports = function(val) {
  return Object.prototype.toString.call(val) === '[object Number]';
};
