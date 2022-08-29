
/*
const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};


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


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`🟢🟢🟢 Assertion Passed: ${array1} is equal to ${array2}`);
  }
  if (eqArrays(array1, array2) === false) {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};*/




// This returns all the indices in a string where a letter occurs.


const letterPositions = function(string) {

  const positions = {};

  for (let i = 0; i < string.length; i++) {   
        if (positions[string[i]]) {
          positions[string[i]].push(i);
      } else {
          positions[string[i]] = [i];
      }
    }
    return positions;
  }
 

module.exports = letterPositions;



//console.log(letterPositions("correct indexes"));












/*
if (positions[letter]) {
          positions[letter] += 
        } else {
          positions[letter] = 
        }

      */







//assertArraysEqual(letterPositions("hello").e, [1]);
