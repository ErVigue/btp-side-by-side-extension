// Import the required libraries
const assert = require('chai').assert;
const { INTERNAL } = require('sqlite3');
const first = require('../first');

// Describe the test

describe('First', function (){
  it('first should return a+b', function(){
    assert.equal(first(2,2), 4)
  })
})