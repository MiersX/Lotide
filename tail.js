const assertEqual = require('./assertEqual');


const tail = function(array) {
  let elementsWithoutHead = array.slice(1);
  return elementsWithoutHead;
};



module.exports = tail;