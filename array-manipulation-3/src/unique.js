/* exported unique */
// define function
function unique(array) {
  // storage for empty list
  var result = [];
  // storage for empty storage
  var obj = {};
  // iterate through "array" list
  for (var i = 0; i < array.length; i++) {
    // if the item does not exist in the obj storage,
    if (obj[array[i]] === undefined) {
      // put the item in the obj storage
      obj[array[i]] = array[i];
      // put the item in the result list
      result.push(array[i]);
    // otherwise
    } else {
      // keep going
      continue;
    }
  }
  // return result list
  return result;
}
