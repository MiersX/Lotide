const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// Take in collection of items. Return counts for specific subset of those items.

// Will have parameters as to what items we care about, only counting those and ignoring others. Items in this case are limited to -> Strings <-


// will be given an array and an object. it returns an OBJECT containing counts of everything the input object listed.
// Only keys which have a truthy value should be counted in the resulting object



// allItems is an array
// itemsToCount is an Object




const countOnly = function(allItems, itemsToCount) {
  
  let results = {};


  for (const item of allItems) {
    //console.log(item);
    if (itemsToCount[item]) {

      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }

    }
  }
  //console.log(results);
  return results;
};



const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
















