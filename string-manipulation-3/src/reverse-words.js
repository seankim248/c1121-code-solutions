/* exported reverseWords */
// define function
function reverseWords(string) {
  // storage for list of string items separated by space
  var stringArr = string.split(' ');
  // empty string
  var reversedStr = '';
  // iterate through stringArr list
  for (var i = 0; i < stringArr.length; i++) {
    // add the reversed string items plus a space into the reversedStr string
    reversedStr += stringArr[i].split('').reverse().join('') + ' ';
  }
  // return reversedStr string with spaces cut off from the beginning and the end
  return reversedStr.trim();
}
