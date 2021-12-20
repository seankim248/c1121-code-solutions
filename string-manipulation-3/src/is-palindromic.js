/* exported isPalindromic */
// define function
function isPalindromic(string) {
  // get rid of spaces in string
  string = string.replace(/\s/g, '');
  // storage for empty string
  var reverseString = '';
  // iterate through string backwards
  for (var i = string.length - 1; i >= 0; i--) {
    // add current item to reverseString string
    reverseString += string[i];
  }
  // if string is equal to reverseString,
  if (string === reverseString) {
    // return true
    return true;
  }
  // return false
  return false;
}
