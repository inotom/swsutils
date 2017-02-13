var assert = require('power-assert');
var existy = require('../src/index').existy;

describe('existy', function() {

  it('exist value', function() {
    assert(existy('') === true);
    assert(existy(0) === true);
    assert(existy(false) === true);
  });

  it('not exist value', function() {
    assert(existy(null) === false);
    assert(existy(void(0)) === false);
  });
});
