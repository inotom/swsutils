var assert = require('power-assert');
var identity = require('../src/index').identity;

describe('identity', function() {

  it('retrun self', function() {
    assert(identity(1) === 1);
  });
});
