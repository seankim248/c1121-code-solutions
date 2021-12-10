/* exported compact */
// define function
function compact(array) {
  // storage for list "compactArr"
  var compactArr = [];
  // iterate through the "array" list
  for (var i = 0; i < array.length; i++) {
    // if the item in the condition comes out as true,
    if (array[i]) {
      // push the item into the "compactArr" list
      compactArr.push(array[i]);
      // otherwise don't do anything
    }
  }
  // then push out the "compactArr" list
  return compactArr;
}
