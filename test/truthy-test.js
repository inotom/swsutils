var assert = require('power-assert');
var truthy = require('../src/index').truthy;

describe('truthy', function() {

  it('true value', function() {
    assert(truthy('') === true);
    assert(truthy(0) === true);
    assert(truthy(true) === true);
  });

  it('false value', function() {
    assert(truthy(null) === false);
    assert(truthy(void(0)) === false);
    assert(truthy(false) === false);
  });
});
