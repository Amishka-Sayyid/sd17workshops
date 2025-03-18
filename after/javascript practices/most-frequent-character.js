// Most Frequent Character
function frequentcharacter(word) {
  // initialise
  let wordcount = {};
  //   An object that will keep track of the number of occurrences of each character.
  let maxletter = "";
  let maxcount = 0;

  // for loop each letterin the word
  for (let letter of word) {
    wordcount[letter] = (wordcount[letter] || 0) + 1;

    if (wordcount[letter] > maxcount) {
      maxletter = letter;
      maxcount = wordcount[letter];
    }
  }

  return maxletter;
}

let input = "ABBAAdBd5BBBAAAAAAA";

console.log(frequentcharacter(input));
