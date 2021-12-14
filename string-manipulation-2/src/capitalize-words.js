/* exported capitalizeWords */
// define function
function capitalizeWords(string) {
  // separate the sentence into a list of items
  var splitStr = string.split(' ');
  // storage for empty list
  var upperCasedStr = [];
  // iterate through the string in the list
  for (var i = 0; i < splitStr.length; i++) {
    // storage of "firstChar" which is the first character capitalized from the "splitStr" item
    var firstChar = splitStr[i][0].toUpperCase();
    // storage of "restOfWord" which are the letters besides the first character lowercased from the "splitStr" item
    var restOfWord = splitStr[i].slice(1, splitStr[i].length).toLowerCase();
    // storage for combination of "firstChar" and "restOfWord"
    var upperCased = firstChar + restOfWord;
    // put the string into the new list
    upperCasedStr.push(upperCased);
  }
  // push out the sentence joined together from the list through the use of the "join" method
  return upperCasedStr.join(' ');
}
