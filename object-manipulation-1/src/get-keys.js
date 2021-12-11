/* exported getKeys */
// define function
function getKeys(object) {
  // storage list for keys
  var keys = [];
  // look through the storage
  for (var key in object) {
    // put in the key into the "keys" storage
    keys.push(key);
  }
  // push out list of keys
  return keys;
}
