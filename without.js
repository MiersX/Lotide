/*
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
};

*/

// Take two arrays. Filter out the elements of the second array within the first and return the result to a variable

// Make sure you don't modify the original / source array

// Set the parameters so that it filters out everything that matches!!






const without = function(sourceArray, arrayToRemove) {
  let filteredArray = sourceArray.filter(element => !arrayToRemove.includes(element));
  return filteredArray;
};


/*
console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));


const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));


assertArraysEqual(words, ["hello", "world", "lighthouse"]);

*/