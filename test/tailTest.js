const tail = require('../tail');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require(`../assertArraysEqual`);







assertArraysEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
