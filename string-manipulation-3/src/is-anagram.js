/* exported isAnagram */
// define function
function isAnagram(firstString, secondString) {
  // make firstString string into sorted string without spaces
  firstString = firstString.split(' ').join('').split('').sort().join('');
  // make secondString string into sorted string without spaces
  secondString = secondString.split(' ').join('').split('').sort().join('');
  // check if firstString string is not equal secondString string
  if (firstString !== secondString) {
    // push out false value
    return false;
  }
  // otherwise push out true value
  return true;
}
