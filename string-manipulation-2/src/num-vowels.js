/* exported numVowels */
// define function
function numVowels(string) {
  // storage for total number
  var total = 0;
  // iterate through string input
  for (var i = 0; i < string.length; i++) {
    // if the string is equal to any of the vowels, then
    if (string[i].toLowerCase() === 'a' || string[i].toLowerCase() === 'e' || string[i].toLowerCase() === 'i' || string[i].toLowerCase() === 'o' || string[i].toLowerCase() === 'u') {
      // add total by 1
      total += 1;
    }
  }
  // push out the total value
  return total;
}
