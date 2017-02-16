var assert = require('power-assert');
var rest = require('../src/index').rest;

describe('rest', function() {

  it('returns rest value', function() {
    assert(rest(void(0)) === void(0));
    assert.deepStrictEqual(rest([]), []);
    assert.deepStrictEqual(rest([0]), []);
    assert.deepStrictEqual(rest([1, 2, 3]), [2, 3]);
    assert.deepStrictEqual(rest(['']), []);
    assert.deepStrictEqual(rest(['a', 'b', 'c']), ['b', 'c']);
    assert.deepStrictEqual(rest(''), []);
    assert.deepStrictEqual(rest('hello'), ['e', 'l', 'l', 'o']);
  });
});
