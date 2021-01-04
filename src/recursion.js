/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n < 0) {
    return null;
  }

  if (n === 1 || n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {

  if (array.length < 1) {
    return 0;
  }

  if (array.length === 1) {
    return array[0];
  }


  return array[0] + sum(array.slice(1));

  // var total = 0;

  // var innerSum = function(array) {
  //   if (array.length > 0) {
  //     total += array[0];
  //     innerSum(array.slice(1));
  //   }
  // };
  // innerSum(array);

  // return total;
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array, total) {
  var total = 0;



  for (var i = 0; i < array.length; i++) {
    var ele = array[i];

    if (!Array.isArray(ele)) {
      total += ele;
    } else {
      total += arraySum(ele);
    }
  }

  return total;
};

// 4. Check if a number is even.
var isEven = function(n) {
  if (n > 0) {
    if (n === 1) {
      return false;
    } else if (n === 0) {
      return true;
    } else {
      return isEven(n - 2);
    }
  } else {
    if (n === 1) {
      return false;
    } else if (n === 0) {
      return true;
    } else {
      return isEven(n + 2);
    }
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n >= 0) {
    if (n < 1) {
      return 0;
    }
    if (n === 1) {
      return 0;
    }
    return n - 1 + sumBelow(n - 1);
  } else {
    if (n > -1) {
      return 0;
    }
    if (n === -1) {
      return 0;
    }
    return n + 1 + sumBelow(n + 1);
  }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {


  if (x < y) {
    if (x > y) {
      var highNum = x;
      var lowNum = y;
    } else {
      var highNum = y;
      var lowNum = x;
    }

    if (highNum - lowNum < 2) {
      return [];
    }

    // base case
    if (highNum - lowNum === 2) {
      return [lowNum + 1];
    }

    return [lowNum + 1].concat(range(lowNum + 1, y));
  } else {

    if (x - y < 2) {
      return [];
    }

    // base case
    if (x - y === 2) {
      return [x - 1];
    }

    return [x - 1].concat(range(x - 1, y));
  }

};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {

  if (exp === 0) {
    return 1;
  }
  if (exp > 0) {
    return base * exponent(base, exp - 1);
  } else {
    return (1 / base) * exponent(base, exp + 1);
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 1) {
    return true;
  }
  if (n === 2) {
    return true;
  }
  if (n < 2) {
    return false;
  }
  return powerOfTwo(n / 2);
};

// 9. Write a function that reverses a string.
var reverse = function(string) {

  if (string.length === 1) {
    return string[0];
  }

  var lastInd = string.length - 1;
  var lastEle = string[lastInd];
  return lastEle + reverse(string.slice(0, lastInd));
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  // base
  if (string.length < 2) {
    return true;
  }
  var firstEle = string[0].toLowerCase();
  var lastEle = string[string.length - 1].toLowerCase();
  if (firstEle !== lastEle) {
    return false;
  } else {
    return palindrome(string.slice(1, -1));
  }

  // still needs space ignoral
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (y === 0) {
    return NaN;
  }
  if (x < 0) {
    x = -x;
    if (y < 0) {
      y = -y
      if (x < y) {
        return -x;
      } else {
        return -(modulo(x - y, y));
      }
    }
    if (x < y) {
      return -x;
    } else {
      return -(modulo(x - y, y));
    }
  }
  if (x < y) {
    return x;
  } else {
    return modulo(x - y, y);
  }
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if (y === 0) {
    return 0;
  }
  if (y > 0) {
    return x + multiply(x, y - 1);
  } else {
    return -x + multiply(x, y + 1);
  }
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  if (y === 0) {
    return NaN;
  }

  if (x < 0 && y > 0) {
    return -(divide(-x, y));
  }
  if (x > 0 && y < 0) {
    return -(divide(x, -y));
  }
  if (x < 0 && y < 0) {
    if (x > y) {
      return 0;
    }
    if (x < y) {
      return 1 + divide(x - y, y);
    }
  }
  if (x === 0 || x < y) {
    return 0;
  }
  if (x > 0 && y > 0) {
    if (x >= y) {
      return 1 + divide(x - y, y);
    }
  }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x < 0 || y < 0) {
    return null;
  }
  if (x === 0) {
    return y;
  }
  if (y === 0) {
    return x;
  }
  if (x > y) {
    return gcd(y, x % y);
  }
  if (x < y) {
    return gcd(x, y % x);
  }
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if ((str1 === '' && str2 !== '') || (str1 !== '' && str2 === '')) {
    return false;
  }

  if (str1 === '' && str2 === '') {
    return true;
  }
  if (str1[0] === str2[0]) {
    return compareStr(str1.slice(1), str2.slice(1));
  }
  return false;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  if (str.length ===1) {
    return [str[0]];
  }
  var arrEle = [str[0]];

  return arrEle.concat(createArray(str.slice(1)));
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  if (array.length === 1) {
    return array[0];
  }

  var returnArr = [array[array.length - 1]];

  return returnArr.concat(reverseArr(array.slice(0, -1)));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  if (length === 1) {
    return [value];
  }
  return [value].concat(buildList(value, length - 1));
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  if (n === 1) {
    return ['1'];
  }
  if (n % 3 === 0 && n % 5 === 0) {
    var newArr = ['FizzBuzz'];
    var nextArr = fizzBuzz(n - 1);
    return nextArr.concat(newArr);
  }
  if (n % 3 === 0 && !(n % 5 === 0)) {
    var newArr = ['Fizz'];
    var nextArr = fizzBuzz(n - 1);
    return nextArr.concat(newArr);
  }
  if (!(n % 3 === 0) && n % 5 === 0) {
    var newArr = ['Buzz'];
    var nextArr = fizzBuzz(n - 1);
    return nextArr.concat(newArr);
  }
  var newArr = [n.toString()];
  var nextArr = fizzBuzz(n - 1);
  return nextArr.concat(newArr);
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  if (array.length === 0) {
    return 0;
  }
  var count = 0;
  if (array[0] === value) {
    count += 1;
  }

  return count + countOccurrence(array.slice(1), value);
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  if (array.length === 0) {
    return [];
  }
  var mapped = callback(array[0]);
  return [mapped].concat(rMap(array.slice(1), callback));
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var keyInstances = 0;

  for (var k in obj) {
    if (k === key) {
      keyInstances += 1;
    }
    if (typeof obj[k] === "object") {
      keyInstances += countKeysInObj(obj[k], key);
    }
  }

  return keyInstances;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var total = 0;

  for (var key in obj) {
    if (typeof obj[key] === 'object') {
      total += countValuesInObj(obj[key], value);
    } else {
      if (obj[key] === value) {
        total += 1;
      }
    }
  }

  return total;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {

  for (var key in obj) {
    if (key === oldKey) {
      obj[newKey] = obj[oldKey];
      delete obj[oldKey];
    }
    if (typeof obj[key] === 'object') {
      obj[key] = replaceKeysInObj(obj[key], oldKey, newKey);
    }
  }

  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  if (n < 1) {
    return null;
  }
  if (n === 1) {
    return [0, 1];
  }
  if (n === 2) {
    return [0, 1, 1];
  }
  var prev1Term = fibonacci(n - 1);
  console.log('term 1: ' + prev1Term);
  var prev2Term = fibonacci(n - 2);
  console.log('term 2: ' + prev2Term);
  var thisTerm = prev1Term[prev1Term.length - 1] + prev2Term[prev2Term.length - 1];
  console.log('this term: ' + thisTerm);
  var result = prev1Term.concat([thisTerm]);
  console.log('result is ' + result)
  return result;
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n < 0) {
    return null;
  }
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  return nthFibo(n - 1) + nthFibo(n - 2);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  var capLet = [array[0].toUpperCase()];

  if (array.length === 1) {
    return capLet;
  }

  return capLet.concat(capitalizeWords(array.slice(1)));
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  var capLet = array[0][0].toUpperCase();
  var cappedWord = [capLet + array[0].slice(1)];

  if (array.length === 1) {
    return cappedWord;
  }

  return cappedWord.concat(capitalizeFirst(array.slice(1)));

};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var total = 0;

  for (var key in obj) {
    if (typeof obj[key] === "object") {
      total += nestedEvenSum(obj[key]);
    }
    if (obj[key] % 2 === 0) {
      total += obj[key];
    }
  }

  return total;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  var returnArr = [];

  array.forEach(function(item) {
    if (!Array.isArray(item)) {
      console.log(item);
      returnArr.push(item);
    } else {
      returnArr = returnArr.concat(flatten(item));
    }
  })
  // console.log('===============');
  return returnArr;

  // var returnArr = [];

  // for (var i = 0; i < array.length; i++) {
  //   var ele = array[i];
  //   if (Array.isArray(ele)) {
  //     returnArr.concat(flatten(ele));
  //   } else {
  //     returnArr.push(ele);
  //   }
  // }

  // return returnArr;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  obj = obj || {};
  if (str.length === 0) {
    return obj;
  }

  var firstLet = str[0];
  if (obj[firstLet] !== undefined) {
    obj[firstLet] ++;
  } else {
    obj[firstLet] = 1;
  }

 return letterTally(str.slice(1), obj);
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  var arr = [];
  if (list.length === 1) {
    return list;
  }

  if (list[0] === list[1]) {
    return compress(list.slice(1));
  } else {
    arr.push(list[0]);
  }

  return arr.concat(compress(list.slice(1)));
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  var arr = [];

  var newEle = array[0];
  newEle.push(aug);
  arr.push(newEle);


  if (array.length === 1) {
    return arr;
  }

  return arr.concat(augmentElements(array.slice(1), aug));
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  var arr = [];
  if (array.length === 1) {
    return array;
  }

  if (array[0] === array[1] && array[0] === 0) {
    return minimizeZeroes(array.slice(1));
  } else {
    arr.push(array[0]);
  }

  return arr.concat(minimizeZeroes(array.slice(1)));
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  var returnArr = [];
  var positivefy = function(num) {
    if (num < 0) {
      return -num;
    }
    return num;
  }
  var firstEle = positivefy(array[0]);
  var secondEle = -(positivefy(array[1]));

  if (array.length < 3) {
    returnArr.push(firstEle);
    if (secondEle !== undefined || secondEle !== -undefined) {
      returnArr.push(secondEle);
    }

    return returnArr;
  }

  returnArr.push(firstEle, secondEle);

  return returnArr.concat(alternateSign(array.slice(2)));
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  var numStrings = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    0: "zero"
  };
  var returnStr = '';
  var currentEle = str[0];
  if (str.length === 0) {
    return returnStr;
  }
  if (numStrings[currentEle] !== undefined) {
    returnStr += numStrings[currentEle];
  } else {
    returnStr += currentEle;
  }

  return returnStr + numToText(str.slice(1));
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
  console.log('new execution context');
  var node = node || document.body;
  // declare tag count at 0 initially
  var tagTotal = 0;
  // iterate through the initial node
  node.childNodes.forEach(function(child) {
    // if the current ele is of the specified tag, add one to the tag count
    console.log(tagTotal);
    console.log(child.localName, tag);
    if (child.localName === tag) {
      tagTotal ++;
    }
    // if the current ele has children
    if (child.childNodes !== undefined) {
      // add the tagCount from its children (through recursive call) to the current total
      console.log('starting to recurse with tag: ' + tag + ' child: ' + child);
      tagTotal += tagCount(tag, child);
    }
  })


  // return tag count;
  return tagTotal;
};

// nodeName: tag

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
  var min = min || 0;
  if (max === undefined) {
    var max = array.length - 1;
  }

  var guess = Math.floor((min + max) / 2);

  if (array[guess] === target) {
    return guess;
  }
  console.log(guess, min, max, target, array);
  if (max < min) {
    return null;
  }

  if (array[guess] > target) {
    console.log("reducing max");
    return binarySearch(array, target, min, guess - 1);
  }
  if (array[guess] < target) {
    console.log("increasing min");
    return binarySearch(array, target, guess + 1, max);
  }
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) { // returns a sorted array
  // split the array in half
  console.log('New context with array: ' + array);

  var lowerHalf = []; // clone for the bottom half of the array we look at
  var upperHalf = []; // clone for the upper half of the array we look at
  var p = 0; // starting point in the array we look at
  var r = array.length - 1; // ending point in the array we look at
  var q = Math.floor((p + r) / 2); // midpoint in the array we look at


  var i = 0;
  var j = 0;
  var k = 0;
  while (k <= q) {
    lowerHalf[i] = array[k];
    i++;
    k++;
  }
  while (k <= r) {
    upperHalf[j] = array[k];
    j++;
    k++;
  }
  i = 0; // reset counters
  j = 0;
  k = 0;

  // define the merge function which takes in two sorted arrays and returns a sorted array of their contents
  var merge = function(array1, array2) {
    console.log('merging arrays: ' + array1 + ' and ' + array2);
    var mergedArr = [];
    var i = 0; // array1 counter
    var j = 0; // array2 counter
    var k = 0; // mergedArr counter
    while (i < array1.length && j < array2.length) {
      if (array1[i] < array2[j]) {
        mergedArr[k] = array1[i];
        k++;
        i++;
      } else {
        mergedArr[k] = array2[j];
        k++;
        j++;
      }
    }
    while (i < array1.length) {
      mergedArr[k] = array1[i];
      k++;
      i++;
    }
    while (j < array2.length) {
      mergedArr[k] = array2[j];
      k++;
      j++;
    }
    return mergedArr;
  }

  // if there are more than one ele in the array, run mergeSort again
  if (lowerHalf.length > 1 || upperHalf.length > 1) {
    console.log('splitting the arrays: ' + lowerHalf + ' and ' + upperHalf);
    return merge(mergeSort(lowerHalf), mergeSort(upperHalf));
  } else {
    // if there is one ele in the array
    return merge(lowerHalf, upperHalf);
  }
  // return a sorted array
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
  // declare a return obj/arr
  var output = input.constructor();
  // foreach statement to iterate through the eles of the input oj
  if (input === null || typeof input !== "object") {
    return input;
  }
  for (var key in input) {
    output[key] = clone(input[key]);
  }
  // return the return obj/arr
  return output;
};

// if (Array.isArray(input)) {
//   input.forEach(function(ele) {
//     if (Array.isArray(ele)) {
//       output.push(clone(ele));
//     } else {
//       var temp = ele;
//       output.push(temp);
//     }
//   })
// } else {
//   for (var key in input) {
//     // if that ele is an object
//     if (typeof input[key] === "object") {
//       // add/push the return value of clone(ele) to the return obj/arr
//       output[key] = clone(input[key]);
//     } else {
//       // if that ele is not an object
//       // simply add/push that ele to the return obj/arr
//       var temp = input[key];
//       output[key] = temp;
//     }
//   }
// }