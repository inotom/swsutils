var assert = require('power-assert');
var last = require('../src/index').last;

describe('last', function() {

  it('returns last value', function() {
    assert(last(void(0)) === void(0));
    assert(last([]) === void(0));
    assert(last([0]) === 0);
    assert(last([1, 2, 3]) === 3);
    assert(last(['']) === '');
    assert(last(['a', 'b', 'c']) === 'c');
    assert(last('') === void(0));
    assert(last('hello') === 'o');
  });
});
