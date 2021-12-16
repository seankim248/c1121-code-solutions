/* exported flatten */
// // define function
function flatten(array) {
  // storage for empty list
  var arr = [];
  // iterate through input list
  for (var i = 0; i < array.length; i++) {
    // if the first item is a list,
    if (Array.isArray(array[i])) {
      // iterate through that list
      for (var j = 0; j < array[i].length; j++) {
        // push the item inside the list
        arr.push(array[i][j]);
      }
      // otherwise
    } else {
      // push the item
      arr.push(array[i]);
    }
  }
  // return list
  return arr;
}
