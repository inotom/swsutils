import assert from 'power-assert';
import { isObject } from '../src/index';

describe('isObject', function() {

  it('is a object value', function() {
    assert(isObject({}) === true);
    assert(isObject({a: 'a'}) === true);
    assert(isObject(Object.create(null)) === true);
    assert(isObject(new Date()) === true);
  });

  it('is not a object value', function() {
    assert(isObject(1) === false);
    assert(isObject('') === false);
    assert(isObject('a') === false);
    assert(isObject(true) === false);
    assert(isObject(false) === false);
    assert(isObject(void(0)) === false);
    assert(isObject(null) === false);
  });
});
