const assertEqual = require('./assertEqual');


const tail = function(array) {
  let elementsWithoutHead = array.slice(1);
  return elementsWithoutHead;
};

console.log(tail([2, 3, 4, 5]));

module.exports = tail;