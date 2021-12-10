/* exported capitalize */
// define function
function capitalize(word) {
  // storage for first character of word that is capitalized
  var firstChar = word[0].toUpperCase();
  // storage for the rest of the word that is lowercased
  var restOfWord = word.slice(1).toLowerCase();
  // push out a result of firstChar added with restOfWord;
  return firstChar + restOfWord;
}
