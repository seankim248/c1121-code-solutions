/* exported isUpperCased */
// define function
function isUpperCased(word) {
  // iterate through word
  for (var i = 0; i < word.length; i++) {
    // if the character at index is not equal to the same character capitalized,
    if (word[i] !== word[i].toUpperCase()) {
      // push out a value of false
      return false;
    }
  }
  // push out a value of true
  return true;
}
