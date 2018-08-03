var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});