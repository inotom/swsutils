var assert = require('power-assert');
var isUndefined = require('../src/index').isUndefined;

describe('isUndefined', function() {

  it('check undefined value', function() {
    var val;
    assert(isUndefined(val) === true);
  });

  it('check defined value', function() {
    var val = 0;
    assert(isUndefined(val) === false);
  });
});

