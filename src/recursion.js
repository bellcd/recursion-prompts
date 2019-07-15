/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  // base cases
    // n is negative, return null
    // n is 0, return 1
  // recursive case. anything else
    // invoke factorial with n - 1
    if (n < 0) {
      return null;
    } else if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  // make an arrayCopy
  // base case, arrayCopy is empty
    // return zero
  // recursive case, arrayCopy is NOT empty
    // pop off first element, return that plus recursion
    const arrCopy = array.slice();
  if (arrCopy.length === 0) {
    return 0;
  } else {
    return arrCopy.shift() + sum(arrCopy);
  }
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {

  // make an arrayCopy
  // base case, arrayCopy is empty
    // return zero
  // recursive cases
    // arrayCopy is NOT empty
      // first element is an array
        // return recursion of 1st element plus recursion of 2nd element
      // first element is NOT an array
        // pop off first element, return that plus recursion
    const arrCopy = array.slice();
  if (arrCopy.length === 0) {
    return 0;
  } else if (Array.isArray(arrCopy[0])) {
    return arraySum(arrCopy[0]) + arraySum(arrCopy.slice(1));
  } else {
    return arrCopy.shift() + arraySum(arrCopy);
  }

};

// 4. Check if a number is even.
var isEven = function(n) {
  //   // doesn't need recursion ...
  // if (n / 2 === Math.round(n / 2)) {
  //   return true;
  // } else {
  //   return false;
  // }

    // base cases
      // n is zero
        // return true
      // n is one, or negative one
        // return false
      // recursive cases
        // n is greater than 1, subtract 2
        // n is less than 1, add 2
    if (n === 0) {
      return true;
    } else if (n === 1 || n === -1) {
      return false;
    } else if (n > 1) {
      return isEven(n - 2);
    } else {
      return isEven(n + 2);
    }

};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  // base cases
    // n is 0 or 1 or -1
      // return 0
  // recursive cases
    // n is greater than 1
      // return n - 1 + sumBelow(n - 1)
    // n is less than 1
      // return n + 1 + sumBelow(n + 1)

    if (n === 0 || n === 1 || n === -1) {
      return 0;
    } else if (n > 1) {
      return n - 1 + sumBelow(n - 1);
    } else {
      return n + 1 + sumBelow(n + 1);
    }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  // base case
    // x + 1 === y, return []
  // recursive case
    // return x + 1 concatted with range(x + 1, y)

  if (x > y) {
    if (x === y || x - 1 === y) {
      return [];
    } else {
      return [x - 1].concat(range(x - 1, y));
    }
  } else {
    if (x === y || x + 1 === y) {
      return [];
    } else {
      return [x + 1].concat(range(x + 1, y));
    }
  }


};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  // base, exp is zero, return 1
  // recursive cases
  // exp is positive
    // base * exponent(base, exp - 1)
  // exp is negative
    // (1 / base) * exponent(base, exp + 1)

  if (exp === 0) {
    return 1;
  } else if (exp === 1) {
    return base;
  } else if (exp === -1) {
    return Number.parseFloat((1 / base).toFixed(4));
  } else if (exp > 1) {
    return base * exponent(base, exp - 1);
  } else if (exp < 1) {
    return Number.parseFloat((1 / base).toFixed(4)) * Number.parseFloat((exponent(base, exp + 1)).toFixed(4));
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  // base cases
    // n is NOT an integer, false
      // n is 1 OR n is 2, true
      // else, false
  // recursive case
    // n / 2 recursion

  if (!Number.isInteger(n) || n === 0) {
    return false;
  } else if (n === 1 || n === 2) {
    return true;
  } else {
    return powerOfTwo(n / 2);
  }
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  // base case, string length is 1
    // return string
  // recursive case
    // return last letter concatted with current string minus last letter

  if (string.length === 1) {
    return string;
  } else {
    return string[string.length - 1].concat(reverse(string.slice(0, string.length - 1)));
  }
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  // check for and address spaces and capital letters

  // base case
    // length is 1, return true
    // first letter is NOT equal to last letter, return false
  // recursive case
    // return recursion of string between first and last letters
  strCopy = string.toLowerCase();
  if (strCopy.includes(' ')) {
    strCopy = strCopy.split(' ').join('');
  }

  if (strCopy.length === 1 || strCopy.length === 0) {
    return true;
  } else if (strCopy[0] !== strCopy[strCopy.length - 1]) {
    return false;
  } else {
    return palindrome(strCopy.slice(1, strCopy.length - 1));
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  // // base cases
  //   // both are positive OR x is neg and y is pos, x < y
  //   // both are negative OR x is pos and y is neg, x > y
  // // recursive cases
  //   // both are positive, (x - y, y)
  //   // else, (x + y, y)
  //
  // TODO: work on modulo
  // if (y === 1 || y === -1 || x === 0) {
  //   return 0;
  // } else if (x === 0 && y === 0) {
  //   return NaN;
  // } else if (((x >= 0 && y >= 0) || (x <= 0 && y >= 0)) && x <= y) {
  //   return x;
  // } else if ( ((x <= 0 && y <= 0) || (x >= 0 && y <= 0)) && x >= y) {
  //   return x;
  // } else if ((x >= 0 && y >= 0) || (x <= 0 && y <= 0)) {
  //   return modulo(x - y, y);
  // } else {
  //   return modulo(x + y, y);
  // }


  // only matters if x is negative

};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.

// base case, x or y is 0, return 0
// recursive case,
  // x & y are both positive OR x is negative y is positive
    // return x + fn(x, y - 1)
  // if x & y are both negative OR x is positive y is negative
    // return -(x) + fn(x, y + 1)
var multiply = function(x, y) {
    if (x === 0 || y === 0) {
      return 0;
    } else if ((x > 0 && y > 0) || (x < 0 && y > 0)) {
      return x + multiply(x, y - 1);
    } else if ((x < 0 && y < 0) || (x > 0 && y < 0)) {
      return -(x) + multiply(x, y + 1);
    }
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).

// declare z
// base cases:
  // x is pos
    // y is pos, x - y is less than 0, return 0
    // y is neg, x + y is less than 0, return 0
  // x is neg
    // y is pos, x - y is less than 0, return 0
    // y is neg, x + y is less than 0, return 0
// base case, x + y is less than 0
// recursive cases
  // x & y are both pos
    // z is x - y
    // decrement z until 1
    // return z + fn(x - y, y)
  // x is pos y is neg
    // z is x + y
    // decrement z until 1
    // return z + fn(x + y, y) ?? new base case
  // if x & y are both neg
    // z is x - y
    // increment z until -1
    // return z + fn(x - y, y)
  // x is neg y is pos
    // z is x + y
    // increment z until -1
    // return z + fn(x + y, y)
var divide = function(x, y) {
      var z = 0;
      if (y === 0) return NaN;
      if (x === 0) return y > 0 ? 0 : -0;
      if (x === y) return 1;
      if (-(x) === y || x === -(y)) return -1;
      if ((x - y < 0 && ((x > 0 && y > 0) || (x < 0 && y > 0)))) return 0;
      if ((x + y < 0 && ((x > 0 && y < 0) || (x < 0 && y < 0)))) return 0;

      if ((x > 0 && y > 0) || ((x < 0 && y < 0))) {
        z = x - y;
        if (x > 0) {
          while (z > 1) z--;
        } else {
          while (z < -1) z++;
        }
        return z + divide(x - y, y);
      } else if ((x > 0 && y < 0) || ((x < 0 && y > 0))) {
        z = x + y;
        if (x > 0) {
          while (z > 1) z--;
        } else {
          while (z < -1) z++;
        }
        return z + divide(x + y, y);
      }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  // TODO: algorithm structure from Khan academy, need to review the why ...
    if (x < 0 || y < 0) return null;
    if (x === 0) {
      return y;
    } else if (y === 0) {
      return x;
    } else {
      return gcd(y, x % y);
    }
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1 === str2) return true;
  if (str1 === '' || str2 === '') return false;

  if (str1[0] === str2[0]) {
    return compareStr(str1.slice(1), str2.slice(1));
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  if (str === '') return [];
  return [str[0]].concat(createArray(str.slice(1)))
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  if (array.length === 0) return [];
  return [array[array.length - 1]].concat(reverseArr(array.slice(0, -1)));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
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
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
