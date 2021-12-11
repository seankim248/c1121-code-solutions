/* exported invert */
// define function
function invert(source) {
  // create an empty storage
  var newObj = {};
  // iterate through source storage
  for (var key in source) {
    // push the value in source as the key and the key in source as the value in newObj
    newObj[source[key]] = key;
  }
  // push out the newObj storage
  return newObj;
}
