/* exported swapChars */
// define function
function swapChars(firstIndex, secondIndex, string) {
  // if firstIndex is equal to second Index return the string
  if (firstIndex === secondIndex) return string;
  // storage for empty string
  var swapped = '';
  // storage for character at firstIndex in string
  var swapChar1 = string[firstIndex];
  // storage for character at secondIndex in string
  var swapChar2 = string[secondIndex];
  // storage for characters before firstIndex in string
  var firstPart = string.slice(0, firstIndex);
  // storage for characters after firstIndex but before secondIndex in string
  var secondPart = string.slice(firstIndex + 1, secondIndex);
  // storage for characters after secondIndex in string
  var thirdPart = string.slice(secondIndex + 1, string.length);
  // combine firstPart, swapChar2, secondPart, swapChar1, and thirdPart into swapped string
  swapped += firstPart + swapChar2 + secondPart + swapChar1 + thirdPart;
  // return string
  return swapped;
}
