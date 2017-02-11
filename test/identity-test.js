import assert from 'power-assert';
import { identity } from '../src/index';

describe('identity', function() {

  it('retrun self', function() {
    assert(identity(1) === 1);
  });
});
