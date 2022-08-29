/*
const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};*/


const eqArrays = function(array1, array2) {

  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  if (array1.length !== array2.length) {
    return false;
  }
  return true;
};



module.exports = eqArrays;
