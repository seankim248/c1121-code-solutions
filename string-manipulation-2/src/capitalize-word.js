/* exported capitalizeWord */
// define function
function capitalizeWord(word) {
  // if the word input all lowercased equals to 'javascript' then
  if (word.toLowerCase() === 'javascript') {
    // push out the string 'JavaScript'
    return 'JavaScript';
  }
  // storage of "firstChar" which is the first character capitalized from the "word" input
  var firstChar = word[0].toUpperCase();
  // storage of "restOfWord" which is the letters besides the first character lowercased from the "word" input
  var restOfWord = word.slice(1, word.length).toLowerCase();
  // push out the combination of "firstChar" and "restOfWord"
  return firstChar + restOfWord;
}
