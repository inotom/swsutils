import existy from './existy';
import isString from './isString';
import isArguments from './isArguments';

/**
 * check empty value
 *
 * @param {*} val check value.
 * @return {Boolean}
 */
export default (val) => {
  if (!existy(val)) {
    return true;
  }
  if (isString(val) ||
      Array.isArray(val) ||
      isArguments(val)) {
    return val.length === 0;
  }
  return Object.keys(val).length === 0;
};
