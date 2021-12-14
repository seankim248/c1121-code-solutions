/* exported omit */
// define function
function omit(source, keys) {
  // create a copy of source storage
  var newObj = {};
  // look through source storage
  for (var key in source) {
    // copy key and property over to newObj storage
    newObj[key] = source[key];
  }
  // iterate through the keys list
  for (var i = 0; i < keys.length; i++) {
    // if the item in key list shows up in source storage,
    if (keys[i] in source) {
      // delete the item from copy of source storage
      delete newObj[keys[i]];
    }
  }
  // push out copy of source storage
  return newObj;
}
