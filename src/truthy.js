import existy from './existy';

/**
 * check value is true
 *
 * @param {*} val check value.
 * @return {Boolean}
 */
export default (val) => {
  return val !== false && existy(val);
};
