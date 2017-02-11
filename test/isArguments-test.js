import assert from 'power-assert';
import { isArguments } from '../src/index';

describe('isArguments', function() {

  it('arguments value', function() {
    (function() {
      let arg = arguments;
      assert(isArguments(arg) === true);
    })('');
  });

  it('not arguments value', function() {
    (function(arg) {
      assert(isArguments(arg) === false);
    })('');
  });
});
