const assertEqual = require('./assertEqual');

const head = function(array) {
  let firstElement = array[0];
  return firstElement;
};


//assertEqual(head([1, 2, 3, 4]), 1)