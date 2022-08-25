const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};


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



// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length === keys2.length) {
    for (const element of keys1) {
      if ((Array.isArray(object1[element])) && (Array.isArray(object2[element]))) {
        return eqArrays(object1[element], object2[element])      
      }
      if (object1[element] !== object2[element]) {
      return false;
    }
  }
return true;
} else {
  return false;
}
};



const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual((eqObjects(cd, dc)), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual((eqObjects(cd, cd2)), false); // => false





const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

/*
   console.log(Object.entries(object1), Object.entries(object2)); 
    //if (eqArrays(Object.entries(object1), Object.entries(object2))
    */