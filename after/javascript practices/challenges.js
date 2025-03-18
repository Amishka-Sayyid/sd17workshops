// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
// returns --> "(123) 456-7890"

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
function createPhoneNumber(number) {
  let phoneNumber = `(${number[0]}${number[1]}${number[2]}) ${number[3]}${number[4]}${number[5]}-${number[6]}${number[7]}${number[8]}${number[9]}`;
  console.log(phoneNumber);
}
createPhoneNumber(number);
