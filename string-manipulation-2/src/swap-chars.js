/* exported swapChars */
// define function
function swapChars(firstIndex, secondIndex, string) {
  // storage for each character separated in the string
  var splitStr = string.split('');
  // storage for character at "firstIndex" index
  var temp = splitStr[firstIndex];
  // swap character at "firstIndex" index with character at "secondIndex" index
  splitStr[firstIndex] = splitStr[secondIndex];
  // swap character at "secondIndex" index with character at "firstIndex" index
  splitStr[secondIndex] = temp;
  // storage for list joined together to make a string again by using the "join" method
  var swappedWord = splitStr.join('');
  // push the swappedWord string
  return swappedWord;
}
