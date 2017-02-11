import assert from 'power-assert';
import { isEmpty } from '../src/index';

describe('isEmpty', function() {

  it('empty value', function() {
    assert(isEmpty('') === true);
    assert(isEmpty([]) === true);
    assert(isEmpty(null) === true);
    assert(isEmpty(void(0)) === true);
    assert(isEmpty({}) === true);
    (function() {
      assert(isEmpty(arguments) === true);
    })();
  });

  it('not empty value', function() {
    assert(isEmpty('a') === false);
    assert(isEmpty([0]) === false);
    assert(isEmpty({foo:''}) === false);
    (function() {
      assert(isEmpty(arguments) === false);
    })('');
  });
});
