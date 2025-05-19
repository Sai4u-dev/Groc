/*
Arrays (static and dynamic),
Strings (pattern matching, manipulation),
Linked lists (singly, doubly),
Stacks (LIFO operations),
Queues (FIFO operations),
Basic tree structures (binary trees, BST).
*/
/* ------------------------------------------------------------------
Data Structures 
    |----Arrays
    |----Linked Lists
    |----Stacksw
    |----Queues
    |----Hash Tables 
    |----Trees
    |----Binary Search trees
    |----Heaps
    |----Graphs
    |----Tries
    |----Union Find
Algorithms
    |----Sorting
    |----Searching
            |----Linear Search
            |----Binary Search
    |----Bit Manipulation
    |---- Traversal
            |----In-Order
            |----Pre-Order
            |----Post-Order
    |----Graph Algorithms
            |----DFS/BFS
            |----Topological Sort
            |----Shortest Path
            |----Minimum Spanning Tree
PROBLEM SOLVING TECHNIQUES
    |----Two-Pointers
    |----Sliding Window
    |----Prefix Sum
    |----Fast And Slow Pointers
    |----Divide And Conquer
    |----Greedy
    |----Recursion
    |----Backtacking
    |----Dynamic Programming 
    |----Top 'K' Problems
ADDITIONAL
    |----System Design
            |----LLD
            |----HLD
    |----DataBases
            |----SQL
                  |----MySQL, PostgreSQL
            |----NoSQL
                  |----MongoDB
    |----Concurrency & Multithreading
    |----Operating Systems & Networking
    |----Cloud Foundations
--------------------------------------------------------------*/
      
      
      
// Write a function that takes an array of integers and returns the sum of its elements.
function array_sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  console.log("The Sum of Given Array => " + arr + " ==> " + sum + ".");
}
array_sum([1, 2, 3, 4, 5]) 
array_sum([0, 0, 0, 0]) 
array_sum([-1, -2, -3]) 
array_sum([100]) 
array_sum([]) 
array_sum([10, -10, 10, -10]) 
array_sum([1, 1, 1, 1, 1]) 
array_sum([999, 1])
array_sum([-100, 200])   
array_sum([5]) 

console.log("/---------------------------------------/");
// Write a function that returns the maximum value in an array of integers. Assume the array is non-empty.
function find_max(arr) {
  let max = Math.max(...arr);
  console.log(`The Highest Element in the array ==> [${arr}] ===> ${max}`);
}

find_max([1, 2, 3]);
find_max([10, 5, 7, 20]);
find_max([-1, -2, -3]); 
find_max([100]); 
find_max([0, 0, 0]);  
find_max([10, 20, 5, 3]); 
find_max([-10, -5, -20]);
find_max([3, 3, 3]);
find_max([1000, 500, 1001]);
find_max([1, 0, -1]);

console.log("/---------------------------------------/");

// Write a function that returns the number of even numbers in the input array.
function count_evens(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }
  console.log(`The Count of Even Numbers in Array ==> [${arr}] is ${count}.`);
  ;
}

count_evens([1, 2, 3, 4]); 
count_evens([2, 4, 6, 8]);  
count_evens([1, 3, 5]);
count_evens([0, 1, 2]); 
count_evens([10, 11, 12, 13]);
count_evens([]);
count_evens([2]);
count_evens([1]);
count_evens([2, 4, 6, 8, 10, 11]);
count_evens([-2, -4, -1]);

console.log("/---------------------------------------/")
// Write a function that returns a new array which is the reverse of the input array.
function reverse_array(arr) {
  let newArr = [...arr]
  for (let i =0; i < newArr.length; i++) {
    for (let j = i + 1;j < newArr.length; j++) {
      if (newArr[i] < newArr[j]) {
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
      }
    }
  }
  console.log(`The Reversed array for ==> [${arr}] ==> [${newArr}].`);
  
}
reverse_array([1, 2, 3]) 
reverse_array([4, 5, 6, 7])  
reverse_array([]) 
reverse_array([10])  
reverse_array([1, -1])  
reverse_array([0, 0, 0])  
reverse_array([1, 2, 3, 4, 5])  
reverse_array([100, 200])  
reverse_array([-5, -10, -15]) 
reverse_array([7, 8, 9, 10, 11])

console.log("/---------------------------------------/");
// Write a function that returns True if the array is sorted in ascending order, otherwise returns False.
function is_sorted(arr) {
  let newArr = [...arr]
  for (let i =0; i < newArr.length; i++) {
    for (let j = i + 1;j < newArr.length; j++) {
      if (newArr[i] > newArr[j]) {
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
      }
    }
  }
  for (let z = 0; z < newArr.length; z++) {
    if (newArr[z] !== arr[z])  { return `The Given array ==> [${arr}] is Not Sorted.` }
  } 
  return `The Given array ==> [${arr}] is Sorted.`;
}
console.log(is_sorted([1, 2, 3, 4]))
console.log(is_sorted([1, 3, 2]) );
console.log(is_sorted([]) );
console.log(is_sorted([5]));
console.log(is_sorted([1, 2, 2, 3]) );
console.log(is_sorted([10, 9, 8]) );
console.log(is_sorted([-1, 0, 1]));
console.log(is_sorted([1, 1, 1, 1]) );
console.log(is_sorted([3, 2, 1]) );
console.log(is_sorted([2, 3, 5, 1]) );


console.log("/---------------------------------------/")

// Write a function that returns how many times a specific value appears in an array.
function count_occurrences(arr, k) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (k === arr[i]) { count++}
  } return `The Count of ${k} in The Array ${arr} is ${count}.`;
}
console.log(count_occurrences([1, 2, 3, 2, 2], 2)); // 3  
console.log(count_occurrences([1, 1, 1, 1], 1));
console.log(count_occurrences([0, 0, 0], 1))
console.log(count_occurrences([], 5))
console.log(count_occurrences([5], 5))
console.log(count_occurrences([1, 2, 3], 4) );
console.log(count_occurrences([-1, -1, 0], -1) );
console.log(count_occurrences([10, 20, 30, 10], 10) );
console.log(count_occurrences([3, 4, 5, 3], 3) );
console.log(count_occurrences([7, 8, 9], 10));

console.log("/---------------------------------------/");
// Write a function that returns a new array with only the non-negative numbers (0 or greater) from the input array.
function filter_non_negatives(arr) {
  let nonNegatives = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      nonNegatives.push(arr[i])
    }
  }
  console.log(`The Non-Negatives for the array [${arr}] is [${nonNegatives}].`);
  ;
}
filter_non_negatives([1, -1, 2, -2]) // [1, 2]  
filter_non_negatives([-5, -4, -3]) // []  
filter_non_negatives([0, 1, 2]) // [0, 1, 2]  
filter_non_negatives([5]) // [5]  
filter_non_negatives([]) // []  
filter_non_negatives([-1, 0, 1]) // [0, 1]  
filter_non_negatives([10, -10, 20]) // [10, 20]  
filter_non_negatives([0, -1, -2]) // [0]  
filter_non_negatives([3, -3, 3, -3]) // [3, 3]  
filter_non_negatives([100, -100, 0]) // [100, 0]

console.log("/---------------------------------------/")
// Write a function that returns the index of the first occurrence of a given target value in an array, or -1 if the value is not found.
function find_index(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {return `The index of Value ${val} in [${arr}] is at ${i}`; break;}
  } return `Not Found index in given array.`
}
console.log(find_index([1, 2, 3], 2));
console.log(find_index([5, 6, 7], 8));
console.log(find_index([10, 20, 30, 20], 20) );
console.log(find_index([], 1));
console.log(find_index([0], 0) );
console.log(find_index([1, 1, 1], 1) )
console.log(find_index([-1, -2, -3], -2) );
console.log(find_index([2, 3, 4, 5], 4) );
console.log(find_index([100, 200, 300], 100) );
console.log(find_index([7, 8, 9], 10));

 console.log("/---------------------------------------/")
// Write a function that returns True if there are any duplicate elements in the array, and False otherwise.
function has_duplicates(arr) {
  for (let i = 0 ; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        return `The Given array [${arr}] contains Duplicates.`;
      }
    }
  } return `The Gievn array [${arr}] Does Not Contains any Duplicates.`;
}
console.log(has_duplicates([1, 2, 3]));
 // False  
console.log(has_duplicates([1, 1, 2]));
 // True  
console.log(has_duplicates([]));
 // False  
console.log(has_duplicates([0, 0]));
 // True  
console.log(has_duplicates([5, 6, 7, 5]));
 // True  
console.log(has_duplicates([8, 9, 10]) );
// False  
console.log(has_duplicates([100, 200, 100]));
 // True  
console.log(has_duplicates([-1, -2, -1]) );
// True  
console.log(has_duplicates([1]));
 // False  
console.log(has_duplicates([3, 3, 3, 3]) );
// True


console.log("/---------------------------------------/")

// Write a function that returns a new array where each element is twice the value of the corresponding element in the input array.
function double_elements(arr) {
  let newarr = [...arr];
  for (let i = 0; i < arr.length; i++) {
    newarr[i] = newarr[i] + newarr[i];
  }
  console.log( `The solution for given [${arr}] is [${newarr}].`);
}

double_elements([1, 2, 3]) // [2, 4, 6]  
double_elements([0, 0]) // [0, 0]  
double_elements([-1, -2]) // [-2, -4]  
double_elements([5]) // [10]  
double_elements([]) // []  
double_elements([10, 20]) // [20, 40]  
double_elements([1, -1]) // [2, -2]  
double_elements([100, 200, 300]) // [200, 400, 600]  
double_elements([3, 6, 9]) // [6, 12, 18]  
double_elements([-10]) // [-20]

// Two SUM PROGRAM BEGINNING
/* Two SUM PSEDOCODE 
FUNCTION twoSum(nums, target):
    CREATE an empty map to store number -> index
    FOR each index i from 0 to length of nums - 1:
        SET currentNumber = nums[i]
        SET complement = target - currentNumber
        IF complement exists in the map:
            RETURN [index of complement from map, i]
        ADD currentNumber and its index i to the map
    RETURN nothing (or undefined if no pair is found)
*/
var twoSumApp1 = function(nums, target) {
    const map = new Map();   
    for ( let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if( map.has(complement)) {
            return "The 2Sum indexes are found at " + [map.get(complement), i];      
        }
        map.set(nums[i], i);        
    } return 'Not Matched...';
}
console.log(twoSumApp1([1,0,-1,0,-2,2,90,-9],88));
console.log(twoSumApp1([3,2,4],6));
console.log(twoSumApp1([3,2],5));

// TWO SUM PROGRAM ENDING
//----------------------------------------------------------------------------------------//

// TWO SUM PROGRAM SECOND APPROACH
/* TWO SUM PROGRAM PSEDOCODE 
FUNCTION twoSum(nums, k):
    FOR i from 0 to length of nums - 1:
        FOR j from i + 1 to length of nums - 1:
            IF nums[i] + nums[j] == k:
                RETURN [i, j]

    RETURN "Not Matched."
*/
function twoSum(nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if ( nums[i] + nums[j] === k) { return "The 2Sum indexes are at " + [i,j]}
    }
  } return "Not Matched."
}
console.log(twoSum([1,0,-1,0,-2,2,90,-9], 0));
console.log(twoSum([3,2,4],6));
console.log(twoSum([3,2],5));

// TWO SUM PROGRAM SECOND APPROACH ENDING
//----------------------------------------------------------------------------------------//

//  Four Sum Program Beginning
/* FOUR SUM PSEUDOCODE FOR MANUALSORT()
FUNCTION manualSort(arr):
    FOR i from 0 to length of arr - 2:
        SET minIdx = i
        FOR j from i + 1 to length of arr - 1:
            IF arr[j] < arr[minIdx]:
                SET minIdx = j
        SWAP arr[i] with arr[minIdx]

FUNCTION fourSum(nums, target):
    CALL manualSort(nums)
    SET n = length of nums
    CREATE empty list res
    CREATE empty map seen

    FOR a from 0 to n - 4:
        FOR b from a + 1 to n - 3:
            FOR c from b + 1 to n - 2:
                FOR d from c + 1 to n - 1:
                    SET sum = nums[a] + nums[b] + nums[c] + nums[d]

                    IF sum == target:
                        SET quad = [nums[a], nums[b], nums[c], nums[d]]
                        CALL manualSort(quad)
                        SET key = string representation of quad (e.g., join with commas)

                        IF key is not in seen:
                            ADD quad to res
                            SET seen[key] = true

    RETURN res
*/
function manualSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIdx]) minIdx = j;
        }
        let temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
}
function fourSum(nums, target) {
    manualSort(nums);
    let n = nums.length;
    let res = [];
    let seen = {};

    for (let a = 0; a < n - 3; a++) {
        for (let b = a + 1; b < n - 2; b++) {
            for (let c = b + 1; c < n - 1; c++) {
                for (let d = c + 1; d < n; d++) {
                    let sum = nums[a] + nums[b] + nums[c] + nums[d];
                    if (sum === target) {
                        let quad = [nums[a], nums[b], nums[c], nums[d]];
                        manualSort(quad);
                        let key = quad.join(',');
                        if (!seen[key]) {
                            res.push(quad);
                            seen[key] = true;
                        }
                    }
                }
            }
        }
    }
    console.log(res, "FourSum")
}
fourSum([1,0,-1,0,-2,2,90,-9], 0)
fourSum([2,2,2,2,2], 8);
fourSum([1, 0, -1, 0, -2, 2], 0);
fourSum([-3, -1, 0, 2, 4, 5], 6);
fourSum([1, 2, 3], 6);
fourSum([1, 2, 3, 4], 10);
fourSum([0, 0, 0, 0, 0], 0);
fourSum([1000000000, 1000000000, 1000000000, 2000000000, 1000000000], 4000000000);
fourSum([-5, -4, -3, -2, -1], -10);
fourSum([-2, -1, 0, 0, 1, 2], 0)
fourSum([10, 20, 30, 40], 100)
fourSum([2, 2, 2, 2, 2, 2], 8)
fourSum([3, -1, -4, 0, 2, -2, 1], 0)
//  Four Sum Program Ending

//----------------------------------------------------------------------------------------//
console.log("|||-----------------String operations--------------------|||");

//  Reverse a String
function reverseString(s) {
  let newstr = "";
  for (let i = s.length - 1; i >= 0; i--) {
    newstr+=s[i]
  }
  console.log(`The Reversed String for "${s}" is "${newstr}".`);
  
}
reverseString("hello") //"olleh"
reverseString("") //""
reverseString("a")   //"a"
reverseString("racecar")   //"racecar"
reverseString("abc def") // "fed cba"
reverseString("12345")  // "54321"
reverseString("!@#")    // "#@!"
reverseString(" space ")   // " ecaps "
reverseString("Python")   // "nohtyP"
reverseString("UPPERlower")    // "rewolREPPU"
reverseString("😊👍")   // "👍😊"
reverseString("newline\n")   // "\nenilwen"
reverseString("tab\tchar")   // "rahc\tbat"
reverseString("a b c")   // "c b a"
reverseString("xyz123!@#")   // "#@!321zyx"

console.log("/---------------------------------------/");
//  Check for Palindrome
function isPalindrome(str) {
  let newstr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newstr += str[i];
  }
  return `Given ==> '${str}' reversed is ==> '${newstr}' so ` + (str === newstr ? 'Strings are Palindromes.' : 'Strings are not Palindromes.')
}
console.log(isPalindrome("madam"));
 // true
console.log(isPalindrome("racecar") );
// true
isPalindrome("a") // true
isPalindrome("") // true
isPalindrome("abc") // false
isPalindrome("12321") // true
isPalindrome("Able was I ere I saw Elba") // false (case-sensitive)
isPalindrome("No lemon, no melon") // false (spaces/punctuation)
isPalindrome("   ") // true
isPalindrome("aa") // true
isPalindrome("ab") // false
isPalindrome("😊") // true
isPalindrome("😊a😊") // true
isPalindrome("Was it a car or a cat I saw") // false
isPalindrome("!@#@!") // true

console.log("/---------------------------------------/");

//  Count Vowels in a String
function countVowels(str) {
  let count = 0;
  let vowels = 'aeiouAEIOU'
  for (let i= 0; i < str.length; i++) {
    if (vowels.includes(str[i])) count++;
  } console.log("The vowels count in '" + str + "' is " + count +".");
}
countVowels("hello") // 2
countVowels("AEIOU") // 5
countVowels("bcdfg") // 0
countVowels("") // 0
countVowels("xyz") // 0
countVowels("beautiful") // 5
countVowels("queue") // 4
countVowels("sky") // 0
countVowels("AaEeIiOoUu") // 10
countVowels("Vowels and consonants") // 6
countVowels("123") // 0
countVowels("!@#aei") // 3
countVowels("This is a test sentence.") // 7
countVowels("Y") // 0
countVowels("ajkjk".repeat(8)) // 8

console.log("/---------------------------------------/");

//  Convert to Title Case
function toTitleCase(str) {
let result = '';
  let separators = " \t\n";
  let capitalizeNext = true;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (separators.includes(char)) {
      result += char;
      capitalizeNext = true;
    } else if (capitalizeNext) {
      result += char.toUpperCase();
      capitalizeNext = false;
    } else {
      result += char.toLowerCase();
    }
  }

  console.log(`The Title case of "${str}" is "${result}".`);
}
toTitleCase("hello world") // "Hello World"
toTitleCase("HELLO WORLD") // "Hello World"
toTitleCase("hElLo WoRlD") // "Hello World"
toTitleCase("") // ""
toTitleCase("a") // "A"
toTitleCase("123 test") // "123 Test"
toTitleCase("title case function") // "Title Case Function"
toTitleCase("multiple     spaces") // "Multiple     Spaces"
toTitleCase("already Title Case") // "Already Title Case"
toTitleCase("one") // "One"
toTitleCase("WORD and word") // "Word And Word"
toTitleCase("ALL CAPS SENTENCE") // "All Caps Sentence"
toTitleCase("with\ttabs") // "With\tTabs"
toTitleCase("with\nnewlines") // "With\nNewlines"
toTitleCase("leading space") // "Leading Space"

console.log("/---------------------------------------/");

//   Check Anagrams
function areAnagrams(s1, s2){
  s1 = s1.replace(/\s+/g, '').toLowerCase();
  s2 = s2.replace(/\s+/g, '').toLowerCase();
  const sorted1 = s1.split('').sort().join('');
  const sorted2 = s2.split('').sort().join('');
  console.log("The strings '" + s1 + "' and '" + s2 + "' are " + (sorted1 === sorted2 ? "Anagrams." : "Not Anagrams."))
}
areAnagrams("listen", "silent") // true
areAnagrams("triangle", "integral") // true
areAnagrams("abc", "def") // false
areAnagrams("a", "a") // true
areAnagrams("", "") // true
areAnagrams("abcd", "dcba") // true
areAnagrams("rat", "car") // false
areAnagrams("aabb", "baba") // true
areAnagrams("ab", "a") // false
areAnagrams("Night", "Thing") // True
areAnagrams("Dormitory", "dirty room") // True
areAnagrams("123", "321") // true
areAnagrams("anagram", "nagaramm") // false
areAnagrams("Tom Marvolo Riddle", "I am Lord Voldemort") // True
areAnagrams("abc!", "!bca") // True

console.log("/---------------------------------------/");

// Replace with given character
function replaceSpaces(str, char) {
  let replacementChar = '';
  for (let i = 0 ; i < str.length; i++) {
    {str[i] === " " ? replacementChar += char : replacementChar += str[i]}
  }
  console.log(`The original [${str}] is updated to [${replacementChar}]`)
}
replaceSpaces("hello world", '_') // "hello_world"
replaceSpaces("", "_") // ""
replaceSpaces("  ", "=") // "=="
replaceSpaces("a b c", "=") // "a=b=c"  
replaceSpaces("noSpaces", "-") // "noSpaces"
replaceSpaces(" leading", "$") // "$leading"
replaceSpaces("trailing ", "()") // "trailing()"
replaceSpaces(" multiple spaces ", "[]") // "[]multiple[]spaces[]"
replaceSpaces("a  b", "-") // "a--b"
replaceSpaces("   ", "*") // "***"
replaceSpaces("space\nnewline", "-|-") // "space-|-newline"
replaceSpaces("space\ttab", "@") // "space@tab"
replaceSpaces("space!", "~") // "space~""
replaceSpaces("a b c d e f", "-") // "a-b-c-d-e-f"
replaceSpaces("Python Programming", "@") 

console.log("/---------------------------------------/");

// Remove Duplicates
/*  Pseudocode
Function removeDuplicates(inputString):
    Initialize an empty string called uniqueCharacters
    For each index i from 0 to length of inputString - 1:  
        Set a flag alreadyExists to False
        For each index j from 0 to length of uniqueCharacters - 1: 
            If character at inputString[i] is equal to uniqueCharacters[j]:
                Set alreadyExists to True
                Break out of the inner loop
        If alreadyExists is False:
            Append inputString[i] to uniqueCharacters
    Return the message:
        "The removed duplicates for [inputString] is [uniqueCharacters]."
*/
function removeDuplicates(str) {
  let unique = '';
  for (let i = 0; i < str.length; i++) {
    let alreadyExists = false;
    for (let j = 0; j < unique.length; j++) {
      if (str[i] === unique[j]) {
        alreadyExists = true;
        break;
      }
    }
    if (!alreadyExists) {
      unique += str[i];
    }
  }
  console.log(`The removed duplicates for [${str}] is [${unique}].`);
  
}

removeDuplicates("aabbcc") // "abc"
removeDuplicates("abc") // "abc"
removeDuplicates("a") // "a"
removeDuplicates("") // ""
removeDuplicates("aaaa") // "a"
removeDuplicates("ababab") // "ab"
removeDuplicates("abcabcabc") // "abc"
removeDuplicates("112233") // "123"
removeDuplicates("!@!@") // "!@"
removeDuplicates("Hello") // "Helo"
removeDuplicates("  ") // " "
removeDuplicates("AaAa") // "Aa"
removeDuplicates("Python") // "Python"
removeDuplicates("AaBbCc") // "AaBbCc"
removeDuplicates("Aa!Aa!") // "Aa!"


console.log('/-----------Class Revision Methods -- 15-05-2025--------/')
/* includes, index, find, findIndex() */
const text = 'Hello, Iam Narendra Upskilling in AccioJob';
console.log(text.indexOf(' '));
console.log(text.lastIndexOf('o'))

const arrayofObj = [
  {sq:1, name:'Aravind', age:20},
  {sq:2, name:'manira', age:24},
  {sq:3, name:'Abhiram', age:24},
  {sq:4, name:'sai', age:24},
  {sq:4, name:'Arava', age:24}
];

//console.log(arrayofObj.find((obj) => obj.sq > 3))
//let index = arrayofObj.findIndex((obj,n, m) => console.log(obj, n, m));
//console.log(index)

let en = []
let ne = arrayofObj.filter((obj) => {
  if (obj.name.includes("ra")) en.push(obj.name);
}
)

console.log(en);

const arr = [[1,0,-1], [0,1,-1], [2,1,-1], [-1,1,0]];
const ouput = [[1,0,-1], [2,1,-1]];
let newa =[]
for (let i = 0; i < arr.length; i++) {
  newa.push(arr[i].sort((a,b) => a-b))
}
console.log(newa);

function recur(i, N) {
  if (i > N) { return i}
  console.log(i);
  recur(i + 1, N);
}
const N = 9;
recur(1, N);
console.log(`Recursion method program`)
// function hello(a) { if a == 1 return hello(a)}; let a  =10
// console.log(hello(a))

function generatePattern(start, end, result = []) {
    if (start > end) return result;
    if (start === end) {
        result.push(start);
    } else {
        result.push(start, end);
        generatePattern(start + 1, end - 1, result);
    }
    return result;
}
const pattern = generatePattern(10, 20);
console.log(`Recursion Program`, pattern); // Output: [1, 10, 2, 9, 3, 8, 4, 7, 5, 6]

// Matrix 90 Degree Rotation
function rotate_mat_90_deg(mat) {
  const n = mat.length;
  for(let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
    }
  } 
  for (let i = 0; i < n; i++) {
    mat[i].reverse();
  }
  return mat;
}
const mat = [[7,2,3], [2,3,4], [5,6,1]];
rotate_mat_90_deg(mat);


// Rotate Matrix approach Two.
function rotateImage(matrix) {
  const n = mat.length;
  const result = Array.from({ length: n }, () => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      result[j][n - 1 - i] = matrix[i][j];
    }
  }
  return [matrix,"Rotated_90",result];
}
rotateImage([[7,2,3], [2,3,4], [5,6,1]])


// Check if a number is a palindrome (reads the same backward).
function isPalindrome(num) {
    let str = num.toString();
    return str === str.split('').reverse().join('');
}
function testIsPalindrome() {
    const tests = [
        [121, true],
        [123, false],
        [0, true],
        [1221, true],
        [12321, true],
        [10, false],
        [1, true],
        [1001, true],
        [1234321, true],
        [-121, false]
    ];
    tests.forEach(([input, expected], i) => {
        const result = isPalindrome(input);
        console.log(`Test ${i + 1}: isPalindrome(${input}) → ${result === expected ? "✅ Passed" : "❌ Failed"}`);
    });
}
testIsPalindrome();
// Determine whether a number is a prime.
function isPrime(num) { 
        if ( num < 2) return false;
        const sqrt = Math.sqrt(num);
        for (let i = 2; i <= sqrt; i++) {
         if (num % i === 0) { 
          return false
         }
        } return true
}
function testIsPrime() {
  const tests =[[2, true],
                [3,true],
                [4,false],
                [17,true],
                [19,true],
                [1,false],
                [0,false],
                [100, false],
                [97, true],
                [999983, true]
    ];
  tests.forEach(([input, expected], i) =>  {
    const results = isPrime(input);
    console.log(`Test ${i + 1}: isPrime(${input}) -> ${results === expected ? "✅ Passed" : "❌ Failed"}`);
  });
}
testIsPrime();
// Check if a number is an Armstrong number (sum of its digits raised to the number of digits equals the number).
function isArmstrong(num) { 
  if (num >= 0 && num < 10) return true;
  let str = num.toString();
  let count = 0;
  let n = str.length;
  for(let i = 0; i < n; i++) {
    count += str[i] ** n;
  }
  return (num == count);
}
function testIsArmstrong() {
  const tests = [
                [153,	true],
                [370,true],
                [371,	true],
                [407,	true],
                [9474,	true],
                [1634,	true],
                [9475,	false],
                [0,	true],
                [1,	true],
                [100,	false]
  ];
  tests.forEach(([input, expected], i) => {
    const result = isArmstrong(input);
    console.log(`Test ${i + 1}: isArmstrong(${input}) -> ${result === expected ? "✅ Passed" : "❌ Failed"}`)
  })
}
testIsArmstrong();
// A number is strong if the sum of the factorials of its digits equals the number.
function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}
function isStrong(num) {
    const sum = num.toString()
        .split('')
        .reduce((acc, d) => acc + factorial(+d), 0);
    return sum === num;
}
function testIsStrong() {
    const tests = [
        [145, true],
        [2, true],
        [1, true],
        [40585, true],
        [0, false],
        [10, false],
        [123, false],
        [40586, false],
        [9, false],
        [100, false]
    ];
    tests.forEach(([input, expected], i) => {
        const result = isStrong(input);
        console.log(`Test ${i + 1}: isStrong(${input}) → ${result === expected ? "✅ Passed" : "❌ Failed"}`);
    });
}
testIsStrong();

const map1 = new Map();
map1.set("a", 1);
map1.set("b", 2);
map1.set("c", 3);

console.log(map1.get("a"));
// Expected output: 1

map1.set("a", 97);

console.log(map1.get("a"));
// Expected output: 97

console.log(map1.size);
// Expected output: 3

map1.delete("b");

console.log(map1.size);
// Expected output: 2
const contacts = new Map();
contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
contacts.has("Jessie"); // true
contacts.get("Hilary"); // undefined
contacts.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });
contacts.get("Jessie"); // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete("Raymond"); // false
contacts.delete("Jessie"); // true
console.log(contacts.size); // 1
const myMap = new Map();

const keyString = "a string";
const keyObj = {};
const keyFunc = function () {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");

console.log(myMap.size); // 3

// getting the values
console.log(myMap.get(keyString)); // "value associated with 'a string'"
console.log(myMap.get(keyObj)); // "value associated with keyObj"
console.log(myMap.get(keyFunc)); // "value associated with keyFunc"

console.log(myMap.get("a string")); // "value associated with 'a string'", because keyString === 'a string'
console.log(myMap.get({})); // undefined, because keyObj !== {}
console.log(myMap.get(function () {})); // undefined, because keyFunc !== function () {}

//--------------------Class 19-05-2025------------------------//s