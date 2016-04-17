/**
 * check value is arguments
 *
 * @param {*} val check value.
 * @return {Boolean}
 */
export default (val) => {
  return toString.call(val) === '[object Arguments]';
};
