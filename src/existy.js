import isUndefined from './isUndefined';
import isNull from './isNull';

/**
 * exist value.
 * value is not undefined and null.
 *
 * @param {*} val check value.
 * @return {Boolean}
 */
export default (val) => {
  return !isUndefined(val) && !isNull(val);
};
