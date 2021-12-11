/* exported reverse */
// define function
function reverse(array) {
  // storage list for "reversedArr"
  var reversedArr = [];
  // iterate through the "array" list backwards
  for (var i = array.length - 1; i >= 0; i--) {
    // put the item at the current index into the "reverseArr" list
    reversedArr.push(array[i]);
  }
  // push out the list
  return reversedArr;
}
