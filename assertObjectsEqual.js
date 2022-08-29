const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');





const assertObjectsEqual = function(object1, object2) {

  const inspect = require('util').inspect;

   if (eqObjects(object1, object2) === true) {
    console.log(`🟢🟢🟢 Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`)
  }
  if (eqObjects(object1, object2) === false) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`)
  }
};

module.exports = assertObjectsEqual;






















/*

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual((eqObjects(cd, dc)), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual((eqObjects(cd, cd2)), false); // => false



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false


*/



