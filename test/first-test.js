var assert = require('power-assert');
var first = require('../src/index').first;

describe('first', function() {

  it('returns first value', function() {
    assert(first(void(0)) === void(0));
    assert(first([]) === void(0));
    assert(first([0]) === 0);
    assert(first([1, 2, 3]) === 1);
    assert(first(['']) === '');
    assert(first(['a', 'b', 'c']) === 'a');
    assert(first('') === void(0));
    assert(first('hello') === 'h');
  });
});
