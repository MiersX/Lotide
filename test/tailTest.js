const tail = require('../tail');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require(`../assertArraysEqual`);

const assert = require('chai').assert;

describe("#tail", () => {

  it("should return [2, 3, 4, 5,]  for [1, 2, 3, 4, 5]", function() {

    const actual = tail([1, 2, 3, 4, 5,]);
    const expected = [2, 3, 4, 5];
    assert.deepEqual(actual, expected);

  });

  it("should return ['b', 'c', 'd', 'e'] for ['a', 'b', 'c', 'd', 'e']", function() {

    const actual = tail(['a', 'b', 'c', 'd', 'e']);
    const expected = ['b', 'c', 'd', 'e']
    assert.deepEqual(actual, expected);

  });




})







