import assert from 'power-assert';
import { contains } from '../src/index';

describe('contains', function() {

  it('contains value in array', function() {
    var list = ['a', 'b', 'c'];
    assert(contains(list, 'a') === true);
    assert(contains(list, 'b') === true);
    assert(contains(list, 'c') === true);
  });

  it('does not contains value in array', function() {
    var list = ['a', 'b', 'c'];
    assert(contains(list, 'd') === false);
    assert(contains(list, 1) === false);
    assert(contains(list, {}) === false);
    assert(contains(list, []) === false);
    assert(contains(null, null) === false);
    assert(contains(void(0), void(0)) === false);
  });

  it('contains string in value', function() {
    var str = 'hello, world';
    assert(contains(str, 'hello') === true);
    assert(contains(str, 'world') === true);
  });

  it('does not contains string in value', function() {
    var str = 'hello, world';
    assert(contains(str, 'helo') === false);
    assert(contains(str, 'word') === false);
    assert(contains(null, 'hello') === false);
    assert(contains(void(0), 'hello') === false);
  });
});
