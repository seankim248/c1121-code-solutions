/* exported chunk */
// define function
function chunk(array, size) {
  // storage for result list
  var result = [];
  // iterate through the list by "size" value
  for (var i = 0; i < array.length; i += size) {
    // put the list cut with slice method from i index to (i + size) index into the result list
    result.push(array.slice(i, i + size));
  }
  // push out the result list
  return result;
}
