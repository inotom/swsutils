/**
 * check value is string
 *
 * @param {*} val check value.
 * @return {Boolean}
 */
export default (val) => {
  return toString.call(val) === '[object String]';
};
