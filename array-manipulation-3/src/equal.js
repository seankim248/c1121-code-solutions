/* exported equal */
// define function
function equal(first, second) {
  // if the length of first list is different from second list return false
  if (first.length !== second.length) return false;
  // storage to keep track of true or false value
  var isTrue = true;
  // iterate through first length
  for (var i = 0; i < first.length; i++) {
    // if item in first list is equal to the same index item in second list,
    if (first[i] === second[i]) {
      // keep isTrue equal to true
      isTrue = true;
      // otherwise
    } else {
      // set isTrue equal to false
      isTrue = false;
      // break out of the iteration
      break;
    }
  }
  // if isTrue is still true,
  if (isTrue === true) {
    // return true
    return true;
  }
  // otherwise return false
  return false;
}
