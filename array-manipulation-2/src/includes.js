/* exported includes */
// define function
function includes(array, value) {
  // iterate through the list
  for (var i = 0; i < array.length; i++) {
    // if the item at current index is equal to the "value" input, then
    if (array[i] === value) {
      // push out value true
      return true;
    }
  }
  // otherwise push out value false
  return false;
}
