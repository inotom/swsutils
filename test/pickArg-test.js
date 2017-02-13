var assert = require('power-assert');
var pickArg = require('../src/index').pickArg;

describe('pickArg', function() {

  it('pick undefined argument returns default value', function() {
    var arg;
    assert(pickArg(arg, 1) === 1);
  });

  it('pick defined argument returns itself', function() {
    var arg = 2;
    assert(pickArg(arg, 1) === 2);
  });
});
