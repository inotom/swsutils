var assert = require('power-assert');
var isArguments = require('../src/index').isArguments;

describe('isArguments', function() {

  it('arguments value', function() {
    (function() {
      var arg = arguments;
      assert(isArguments(arg) === true);
    })('');
  });

  it('not arguments value', function() {
    (function(arg) {
      assert(isArguments(arg) === false);
    })('');
  });
});
