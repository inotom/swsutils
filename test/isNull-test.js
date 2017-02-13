import assert from 'power-assert';
import { isNull } from '../src/index';

describe('isNull', function() {

  it('null value', function() {
    assert(isNull(null) === true);
  });

  it('not null value', function() {
    assert(isNull('') === false);
    assert(isNull(0) === false);
    assert(isNull(false) === false);
    assert(isNull(void(0)) === false);
  });
});
