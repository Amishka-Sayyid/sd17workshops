//Array Reduce Transformation
/*Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

If the length of the array is 0, the function should return init.

Please solve it without using the built-in Array.reduce method.*/

function reduce(nums, fn, init) {
  let accum = init; // Start with the initial value

  // Iterate over the array
  for (let i = 0; i < nums.length; i++) {
    accum = fn(accum, nums[i]); // Apply the reducer function to the accumulator and current element
  }

  return accum; // Return the final accumulated value
}

const number = [1, 2, 3, 4];
const accumulation = reduce(
  number,
  function (accum, curr) {
    return accum + curr; // Add the current value to the accumulator
  },
  0
); // Start with an initial value of 0

console.log(accumulation); // Output: 10
