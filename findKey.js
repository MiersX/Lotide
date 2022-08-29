/*const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};
*/




const findKey = (object, callback) => {
  const keys = Object.keys(object);

  for (const element of keys) {
    if (callback(object[element]))  
      return element;
  }
};

module.exports = findKey;



/*
object1 = {
  banana: 6,
  oranges: 5,
  pears: 37,
  cherries: 0,
  apples: 5,
}

assertEqual(findKey(object1, x => x >10), "pears");

object2 = {
  Jeff: {isGrad: false},
  Lisa: {isGrad: false},
  Thomas: {isGrad: false},
  Andy: {isGrad: true},
  Josiah: {isGrad: false},
  Bernard: {isGrad: true},
}

assertEqual(findKey(object2, x => x.isGrad === true), "Andy");

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"
*/