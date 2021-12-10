/* exported isLowerCased */
// define function
function isLowerCased(word) {
  // iterate through word
  for (var i = 0; i < word.length; i++) {
    // if the character at index is not equal to the same character not capitalized,
    if (word[i] !== word[i].toLowerCase()) {
      // push out a value of false
      return false;
    }
  }
  // push out a value of true
  return true;
}
