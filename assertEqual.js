

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("🟢🟢🟢 Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
  }
};

/*
const assertEqual = function (actual, expected) {
  actual === expected
    ? console.log("Assertion Passed: " + actual + " === " + expected)
    : console.log("Assertion Failed: " + actual + " !== " + expected);
};
*/



assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Descartes", "Descartes");
assertEqual("Hobbes", "Foucault");
assertEqual(5, 5);
assertEqual(25, 31);
