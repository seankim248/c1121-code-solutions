/* exported reverseWord */
// define function
function reverseWord(word) {
  // storage for reversed word
  var reverse = '';
  // iterate through the word backwards
  for (var i = word.length - 1; i >= 0; i--) {
    // reassign reverse with the character at the index
    reverse = reverse + word[i];
  }
  // push out the reversed word
  return reverse;
}
