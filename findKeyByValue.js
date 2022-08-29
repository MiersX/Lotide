/*const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};
*/

// Takes in an object and a value. Scans the object, and return the first key which contains the given value.
// If no key with that give value is found, it should return undefined.


const findKeyByValue = function(object, desiredValue) {
  const keys = Object.keys(object);

  for (const element of keys) {
    if (object[element] === desiredValue) {
      return element;
    }
  }
};





module.exports = findKeyByValue;




/*

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  banana: 7,
  tooLate: false,
  noWay: null,
};





/*
values.forEach((value) => {
  //console.log("value:", value)
  if (value === desiredValue) {
    matching = desiredValue;
  }
})
for (const property in object) {
  if (`${object[property]}` === matching) {
    key = `${property}`;
  }
}

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, 7), "banana");
assertEqual(findKeyByValue(bestTVShowsByGenre, false), "tooLate");
assertEqual(findKeyByValue(bestTVShowsByGenre, null), "noWay");

*/