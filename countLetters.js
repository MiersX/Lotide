const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};


//Create a function called countLetters.

// Take in a sentence as a string. Return a count of each of the letters in that sentence.


const countLetters = function(string) {

  let countObject = {};

  for (const letter of string) {

    if (letter !== ' ') {
      
      countObject[letter] ?
        countObject[letter] += 1
        : countObject[letter] = 1;
    }
  }
  return countObject;
};

//console.log(countLetters("Love me some apples"));
