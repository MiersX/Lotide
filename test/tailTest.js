const tail = require('../tail');
const assertArraysEqualTotal = require(`../assertArraysEqual`);

const eqArrays = assertArraysEqualTotal[0];
const assertArraysEqual = assertArraysEqualTotal[1];




assertArraysEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
