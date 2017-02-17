/*eslint no-octal:0 */

var assert = require('power-assert');
var isNumber = require('../src/index').isNumber;

describe('isNumber', function() {

  it('is number value', function() {
    assert(isNumber(0) === true);
    assert(isNumber(1.0) === true);
    assert(isNumber(0xFF) === true);
    assert(isNumber(0144) === true);
    assert(isNumber(Number.MIN_VALUE) === true);
    assert(isNumber(Number.MIN_SAFE_INTEGER) === true);
    assert(isNumber(Number.MAX_VALUE) === true);
    assert(isNumber(Number.MAX_SAFE_INTEGER) === true);
    assert(isNumber(Number.NEGATIVE_INFINITY) === true);
    assert(isNumber(Number.POSITIVE_INFINITY) === true);
    assert(isNumber(NaN) === true);
  });

  it('is not number value', function() {
    assert(isNumber(null) === false);
    assert(isNumber(void(0)) === false);
    assert(isNumber(true) === false);
    assert(isNumber(false) === false);
    assert(isNumber('') === false);
    assert(isNumber('hello') === false);
    assert(isNumber({}) === false);
    assert(isNumber({foo:''}) === false);
    assert(isNumber([]) === false);
    assert(isNumber([0]) === false);
  });
});
