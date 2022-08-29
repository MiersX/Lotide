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

module.exports = middle;
