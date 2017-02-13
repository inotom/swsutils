var assert = require('power-assert');
var isUndefined = require('../src/index').isUndefined;

describe('isUndefined', function() {

  it('check undefined value', function() {
    let val;
    assert(isUndefined(val) === true);
  });

  it('check defined value', function() {
    let val = 0;
    assert(isUndefined(val) === false);
  });
});

