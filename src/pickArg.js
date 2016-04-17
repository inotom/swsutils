import isUndefined from './isUndefined';

/**
 * pickup value or defaultValue
 *
 * @param {*} value
 * @param {*} defaultValue return this value if value is undefined.
 * @return {*}
 */
export default (value, defaultValue) => {
  return isUndefined(value) ? defaultValue : value;
};
