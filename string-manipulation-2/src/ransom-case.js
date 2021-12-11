/* exported ransomCase */
// define function
function ransomCase(string) {
  // storage for empty string
  var ransomedWord = '';
  // iterate through string
  for (var i = 0; i < string.length; i++) {
    // if the index is even,
    if (i % 2 === 0) {
      // add the lowercased character at the current index into the "ransomedWord" string
      ransomedWord = ransomedWord + string[i].toLowerCase();
    } else {
      // otherwise add the uppercased character at the current index into the "ransomedWord" string
      ransomedWord = ransomedWord + string[i].toUpperCase();
    }
  }
  // push out the string
  return ransomedWord;
}
