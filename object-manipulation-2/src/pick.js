/* exported pick */
// define function
function pick(source, keys) {
  // storage for newObj
  var newObj = {};
  // iterate through keys list
  for (var i = 0; i < keys.length; i++) {
    // if item in source storage is not equal to undefined and it exists in source storage,
    if (source[keys[i]] !== undefined && keys[i] in source) {
      // push in the keys and values in source storage into newObj storage
      newObj[keys[i]] = source[keys[i]];
    }
  }
  // push out newObj storage
  return newObj;
}
