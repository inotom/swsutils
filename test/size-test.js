var assert = require('power-assert');
var size = require('../src/index').size;

describe('size', function() {

  it('return String length', function() {
    assert(size('') === 0);
    assert(size('hello') === 5);
  });

  it('return Array elements size', function() {
    assert(size([]) === 0);
    assert(size([0]) === 1);
    assert(size([0, 1, 2]) === 3);
    assert(size(new Array()) === 0);
    assert(size(new Array(1, 2)) === 2);
  });

  it('return Object keys size', function() {
    assert(size({}) === 0);
    assert(size(Object.create(null)) === 0);
    assert(size({a: '1'}) === 1);
    assert(size({a: '1', b: '2'}) === 2);
  });

  it('return zero, which is not String, Array, Object', function() {
    assert(size(null) === 0);
    assert(size(void(0)) === 0);
    assert(size(true) === 0);
    assert(size(false) === 0);
  });
});
