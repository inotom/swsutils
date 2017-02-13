var assert = require('power-assert');
var isArray = require('../src/index').isArray;

describe('isArray', function() {

  it('is a Array value', function() {
    assert(isArray([]) === true);
    assert(isArray([0, 1]) === true);
    assert(isArray(new Array()) === true);
  });

  it('is not a Array value', function() {
      assert(isArray(0) === false);
      assert(isArray('') === false);
      assert(isArray('a') === false);
      assert(isArray({}) === false);
      assert(isArray({a: 'a'}) === false);
      assert(isArray(Object.create(null)) === false);
      assert(isArray(true) === false);
      assert(isArray(false) === false);
      assert(isArray(void(0)) === false);
      assert(isArray(null) === false);
    (function() {
      var arg = arguments;
      assert(isArray(arg) === false);
    })('');
  });
});
