var assert = require('power-assert');
var isString = require('../src/index').isString;

describe('isString', function() {

  it('string value', function() {
    assert(isString('') === true);
    assert(isString('hello') === true);
  });

  it('not string value', function() {
    assert(isString(null) === false);
    assert(isString(void(0)) === false);
    assert(isString(0) === false);
    assert(isString(1.0) === false);
    assert(isString({}) === false);
    assert(isString({foo:''}) === false);
    assert(isString([]) === false);
    assert(isString([0]) === false);
  });
});
