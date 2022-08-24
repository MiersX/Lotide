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


//declare a function middle

//Take in an array, and return the middle-most element(s) - length of returned array may vary

//for arrays with less than 3 elements, it should return an empty array

// If array is odd, return single item, if array is even it should return the middle-pair



const middle = function(array) {

  let middleNums = [];

  if (array.length < 3) {
    //console.log(middleNums);
    return middleNums;
  }
  if (array.length % 2 !== 0) {
    middleNums.push(array[Math.floor((array.length / 2))]);
  } else {
    middleNums.push(array[(Math.floor((array.length / 2))) - 1], array[Math.floor((array.length / 2))]);
  }
  //console.log(middleNums)
  return middleNums;
};