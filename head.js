const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};



const head = function(array) {
  let firstElement = array[0];
  return firstElement;
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

