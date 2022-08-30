# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @miersx/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:


* 'head' : Returns the first element of an array.
* 'tail' : Returns all elements indexed after the first element [1], [2]...
* 'middle' : Returns the element indexed in the middle of an array, if even length array is encountered it returns the two middle elements.
* 'assertArraysEqual' : An asserting function that logs a boolean as to whether our actual vs expected array arguments are strictly equal.
* 'assertEqual' : Returns a boolean comparing if our actual argument is strictly equal to our expected argument.
* 'assertObjectsEqual' : Returns a boolean comparing if two objects are strictly equal.
* 'countLetters' : Returns a count of each of the letters in a string. 
* 'countOnly' : Function which accepts 2 arguments, an array of strings and object of things we want to count in that array. It returns an object detailing the resulting count. 
* 'eqArrays' : Compares two arrays and returns a boolean as to their strict equality.
* 'eqObjects' : Compares to objects and returns a boolean as to their strict equality.
* 'findKey' : Accepts an object and a function. Returns the first key from the object whose value makes the function return true.
* 'findKeyByValue' : Accepts an object and a value, returns the first key which contains the given value.
* 'letterPositions' : Returns all the indices in a string where each letter occurs.
* 'map' : Performs a given function on each element of an array, and returns the results in a new array.
* 'takeUntil' : Accepts an array and a function. Creates a new array, iterating through and populating it with every element in the source array until the given callback function evaluates to true. 
* 'without' : Accepts two arrays as arguments, source and toRemove. Returns a new array populated with all the elements in the source that did not match elements in the toRemove array.