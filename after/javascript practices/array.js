// sum of all elements in the array.
function Sum(arr) {
  const actualSum = arr.reduce((sum, num) => sum + num, 0); // Sum of elements in the array

  return actualSum;
}

console.log(Sum([1, -2, 3, 4, -1, 2, 1, -5, 4]));
