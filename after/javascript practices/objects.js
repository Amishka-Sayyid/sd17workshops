//1. reverse a string
// Problem: Write a function that takes a string as input and returns the string reversed.

function reverse(str) {
  return str.split("").reverse().join("");
}

const word = "hello";
console.log(reverse(word));

//2.sum of digits
// Problem: Write a function that takes a number and returns the sum of its digits.

function sumDigits(num) {
  //  Convert number to string and split it into an array

  let singles = num.toString().split("");
  // Convert string array to a number array
  let realdigit = singles.map(Number);
  let sum = 0;

  for (let i = 0; i < realdigit.length; i++) {
    sum += realdigit[i]; // Add each digit to the sum
  }

  return sum; // Return the total sum
}

console.log(sumDigits(246));

// 3.
// Remove Duplicates from Array
// Problem: Write a function that removes duplicate values from an array.
// removeDuplicates([1, 2, 2, 3, 4, 5, 5]);

function removeDuplicates(num) {
  const numcount = {}; // To store the frequency of each number
  const result = []; // Array to store the numbers without duplicates

  // Loop through the array to count occurrences
  for (let i = 0; i < num.length; i++) {
    numcount[num[i]] = (numcount[num[i]] || 0) + 1;
  }

  // Loop again to collect unique numbers (those that appear only once)
  for (let i = 0; i < num.length; i++) {
    if (numcount[num[i]] === 1) {
      // Only add numbers with a count of 1
      result.push(num[i]);
    }
  }

  return result; // Return the array with duplicates removed
}

console.log(removeDuplicates([1, 2, 1, 2, 1, 5, 4, 1, 1])); // Output: [5, 4]

/*4.Find the Missing Number
Problem: Given an array of numbers from 1 to n, with one missing number, find the missing number. Assume the array is unsorted.
Example:
javascript
Copy
findMissingNumber([3, 7, 1, 2, 8, 4, 5]); // Output: 6*/

function findMissingNumber(arr) {
  const n = arr.length + 1; // Since one number is missing, n is length + 1
  const expectedSum = (n * (n + 1)) / 2; // Sum of numbers from 1 to n
  const actualSum = arr.reduce((sum, num) => sum + num, 0); // Sum of elements in the array

  return expectedSum - actualSum; // The missing number is the difference
}

console.log(findMissingNumber([3, 7, 1, 2, 8, 4, 5])); // Output: 6

/*5.
 Find the Largest Sum of Consecutive Subarray
Problem: Given an array of integers, find the largest sum of a contiguous subarray (a subarray with consecutive elements).
Example:
javascript
Copy
largestSubarraySum([1, -2, 3, 4, -1, 2, 1, -5, 4]);*/
function largestSubarraySum(arr) {
  let maxSum = arr[0]; // Start with the first element
  let currentSum = arr[0]; // Start with the first element

  for (let i = 1; i < arr.length; i++) {
    // Update currentSum: either start a new subarray or extend the existing one
    currentSum = Math.max(arr[i], currentSum + arr[i]);

    // Update maxSum if we found a new larger sum
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

console.log(largestSubarraySum([1, -2, 3, 4, -1, 2, 1, -5, 4])); // Output: 7

/*6
FizzBuzz
Problem: Write a function that prints numbers from 1 to n, but for multiples of 3, print "Fizz" instead of the number, and for the multiples of 5, print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
Example:
javascript
Copy
fizzBuzz(15);*/
function fizzBuzz(num) {
  let result = "";

  if (num % 15 === 0) {
    result = "FizzBuzz";
  } else if (num % 3 === 0) {
    result = "Fizz";
  } else if (num % 5 === 0) {
    result = "Buzz";
  } else {
    result = num.toString(); // Return the number itself if it's neither divisible by 3 nor 5
  }

  return result;
}

console.log(fizzBuzz(15)); // Output: "FizzBuzz"
console.log(fizzBuzz(9)); // Output: "Fizz"
console.log(fizzBuzz(10)); // Output: "Buzz"
console.log(fizzBuzz(7)); // Output: "7"

/*7
Find the Longest Word in a String
Problem: Write a function that takes a string as input and returns the longest word in the string.
Example:
javascript
Copy
findLongestWord("The quick brown fox jumped over the lazy dog");*/

/*8
Array Flattening
Problem: Given an array of nested arrays, flatten it into a single array.
Example:
javascript
Copy
flattenArray([1, [2, 3], [4, [5, 6]]]); */

/*9
Check if Two Strings are Anagrams
Problem: Write a function that checks if two strings are anagrams of each other (i.e., they contain the same characters in any order).
Example:
javascript
Copy
areAnagrams("listen", "silent"); // Output: true
areAnagrams("hello", "world");*/

/*10
Find the Intersection of Two Arrays
Problem: Given two arrays, return a new array containing only the elements that are present in both arrays.
Example:
javascript
Copy
findIntersection([1, 2, 3, 4], [3, 4, 5, 6]); // Output: [3, 4]*/
