/* Array Methods :
  arrayName.conact();
  arrayName.copyWithin();
  arrayName.every();
  arrayName.fiter();
  arrayName.flat();
  arrayName.flatMap();
  arrayName.indexOf();
  arrayName.lastIndexOf();
  arrayName.map();
  arrayName.reduce();
  arrayName.reduceRight();
  arrayName.reverse();
  arrayName.slice();
  arrayName.some();
  arrayName.sort();
  arrayName.splice();
*/

/* Newer methods (e.g., keys) do not treat empty slots specially and treat them as if they contain undefined. Methods that conflate empty slots with undefined elements include the following:
  arrayName.entries();
  arrayName.fill();
  arrayName.find();
  arrayName.findIndex();
  arrayName.findLast();
  arrayName.findLastIndex();
  arrayName.includes();
  arrayName.join();
  arrayName.keys();.
  arrayName.toLocaleString();
  arrayName.toReversed();
  arrayName.toSorted();
  arrayName.toSpliced();
  arrayName.values();
  arrayName.with();
*/

/* The Following Array Methods create new Array by using this.constructor[Symbol.species] to determine the constructor to use:

  arrayName.concat():
  arrayName.filter();
  arrayName.flat();
  arrayName.flatMap();
  arrayName.map();
  arrayName.slice();
  arrayName.splice();
*/


/*  The following methods always create new arrays with the Array base constructor:

  arrayName.roReversed();
  arrayName.toSorted();
  arrayName.toSpliced();
  arrayName.with();
*/

/* 

A mutating method modifies the array in place. The original array is changed.

A non-mutating method does not alter the original array. It returns a new array (or value) instead.

|----------------|------------------------|
|    MUTATING    |      NON MUTATING      |
|----------------|------------------------|
|copyWithin()    |NO                      |  
|fill()          |NO                      |
|pop()           |slice(0, -1)            | 
|push(v1, v2)    |concat([v1,v2])         |
|reverse()       |toReversed()            |
|shift()         |slice()                |
|sort()          |toSorted()              |
|splice()        |toSpliced()             |
|unshift(v1,v2)  |toSpliced(0,0, v1, v2)  |
|----------------|------------------------|
    
    Non-Mutating Mathods Alternatives
    map()	
    filter()	
    slice()	
    concat()
    toSorted()	
    toReversed()	
    toReversed()
    toSpliced()	
    with()	
    reduce()
    find()	
    includes()	
    every()	
    some()	
    indexOf()	
    entries()	
*/

/*
Constructor
  Array()
    create a new Array Object
    
Static Properties
  Array[Symbol.species]
    Returns the Array Contructor
    
Static Methods
  array.form()
    |-Creates a new Array instance from an iterable or array-like object.
    
  array.fromAsync()
    |-Creates a new Array instance from an async iterable, iterable, or array-like object.

  array.isArray()
    |-Returns true if the argument is an array, or false otherwise.

  array.of()
    |-Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.
    
Instance Properties
  array.constructor, arr.length
  
Instance Methods
  array.at()
    |-Returns the array item at the given index. Accepts negative integers, which count back from the last item.
    
  array.concat()
    |-Returns a new array that is the calling array joined with other array(s) and/or value(s).
    
  array.copyWithin()
    |- Copies a sequence of array elements within a array
    
  array.entries
    |-Returns a new array iterator object that contains the key/value pairs for each index in an array.
    
  array.every()
    |-Returns true if every element in the calling array satisfies the testing function.
    
  array.fill()
    |-Fills all the elements of an array from a start index to an end index with a static value.
    
  array.filter()
    |-Fills all the elements of an array from a start index to an end index with a static value.
    
  array.find()
    |-Returns the value of the first element in the array that satisfies the provided testing function, or undefined if no appropriate element is found.

  array.findIndex()
    |-Returns the index of the first element in the array that satisfies the provided testing function, or -1 if no appropriate element was found.
    
  array.findLast()
    |-Returns the value of the last element in the array that satisfies the provided testing function, or undefined if no appropriate element is found.

  array.findLastIndex()
    |- Returns the index of the last element in the array that satisfies the provided testing function, or -1 if no appropriate element was found.
    
  array.flat()
    |-Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
    
  array.flatMap()
    |-Returns a new array formed by applying a given callback function to each element of the calling array, and then flattening the result by one level.
    
  array.forEach()
    |-Calls a function for each element in the calling array.
    
  array.includes()
    |-Determines whether the calling array contains a value, returning true or false as appropriate.
    
  array.indexOf()
    |-Returns the first (least) index at which a given element can be found in the calling array.
    
  array.join()
    |-Joins all elements of an array into a string
    
  array.keys()
    |-Returns a new array iterator that contains the keys for each index in the calling array.
    
  array.lastIndexOf() 
    |-Returns the last (greatest) index at which a given element can be found in the calling array, or -1 if none is found.

  array.map()
    |-Returns a new array containing the results of invoking a function on every element in the calling array.
    
  array.pop()
    |-Removes the last element from an array and returns that element.
    
  array.push()
    |-Adds one or more elements to the end of an array, and returns the new length of the array.
    
  array.reduce()
    |-Executes a user-supplied "reducer" callback function on each element of the array (from left to right), to reduce it to a single value.

    array.reduceRight()
      |-Executes a user-supplied "reducer" callback function on each element of the array (from right to left), to reduce it to a single value.

    array.reverse()
      |-Reverses the order of the elements of an array in place. (First becomes the last, last becomes first.)
        
    array.shift()
      |-Removes the first element from an array and returns that element.
      
    array.slice()
      |-Extracts a section of the calling array and returns a new array.

    array.some()
      |-Returns true if at least one element in the calling array satisfies the provided testing function.

    array.sort()
      |-Sorts the elements of an array in place and returns the array.
      
    array.splice()
      |-Adds and/or removes elements from an array.
      
    array.toLocalString()
      |-Returns a localized string representing the calling array and its elements. Overrides the Object.prototype.toLocaleString() method.
      
    array.toReversed()
      |-Returns a new array with the elements in reversed order, without modifying the original array.

    array.toSorted()
      |-Returns a new array with the elements sorted in ascending order, without modifying the original array.
      
    array.toSpliced()
      |-Returns a new array with some elements removed and/or replaced at a given index, without modifying the original array.
      
    array.toString()
      |-Returns a string representing the calling array and its elements. Overrides the Object.prototype.toString() method.
      
    array.unshift()
      |-Adds one or more elements to the front of an array, and returns the new length of the array.
      
    array.values() 
      |-Returns a new array iterator object that contains the values for each index in the array.
      
    array.with()
      |-Returns a new array with the element at the given index replaced with the given value, without modifying the original array.
      
    array.[Symbol.iterator]()
      |-An alias for the values() method by default.

*/


// Examples for array Common Operations

/*
// Creating an Array Using array literal Notation
const fruits = ["Apple", "Banana"];
console.log(fruits, fruits.length);

// Creating an Array using Array() constructor
const fruits2 = new Array("Apple", "Banana"); 
console.log(fruits2, fruits2.length);

// Creating an Array using String.prototype.split().
const fruits3 = "Apple, Banana, Papaya".split(", ")
console.log(fruits3, fruits3.length);

// Creating an Array using arr.of() Method
const arr = Array.of(5); // [5], not 5 empty slots!
const nums = Array.of(1, 2, 3); // [1, 2, 3]
console.log(arr, arr.length, nums, nums.length);

// Creating a string from an Array
const fruitsString = fruits.join(", ");
console.log(fruitsString, fruitsString.length);

//  Access an Array item by its index
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[3]);
console.log(fruits[fruits.length - 1]);

//  Find the index of an item in an array
console.log(fruits.indexOf("Banana")) //return index or -1

// Checks if an array contains a certain item or not
console.log(fruits.includes("Banana")) // returns bool values

const buffer = new ArrayBuffer(8);
const view = new Int32Array(buffer);
console.log(buffer, view);

*/

// function cube(tests) {
//   return tests.map(num => num ** 3); 
// }
// function isTest() {
// const tests = [[1, 2, 3, 4], [2, 4, 6, 8]];
// tests.forEach((test, i) => { 
//     const result = cube(test);  
//     console.log(`Test ${i + 1}: cube(${test}) -> [${result}]`);
//   });
// }
// isTest();
// function evenNums(even_numbers) {
//   return even_numbers.filter(num => num % 2 == 0 );
// }
// function is_Test_Even_Numbers() {
//   const testCases = [
//     [1,2,3,4,5,6,7],
//     [7,8,9,0,12],
//     [87,90,9,89,0],
//     [1,5,7]
//   ];
  
//   testCases.forEach((testCasesValues, index) => {
//     const results = evenNums(testCasesValues);
//     console.log(`The test ${index + 1} of EvenNumber [${testCasesValues}] is [${results}].`)
//   })
// }
// is_Test_Even_Numbers();

const mathProperties = Object.getOwnPropertyNames(Math);
console.log(mathProperties);
let b = 4
Math.sqrt(16)




















