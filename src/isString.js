/**
 * check value is string
 *
 * @param {*} val check value.
 * @return {Boolean}
 */
module.exports = (val) => {
  return toString.call(val) === '[object String]';
};
