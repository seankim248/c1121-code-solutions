/* exported toObject */
// define function
function toObject(keyValuePair) {
  // storage for newObj
  var newObj = {};
  // putting in new data of the list "keyValuePair" index 0 as the key and index 1 as the property in storage "newObj"
  newObj[keyValuePair[0]] = keyValuePair[1];
  // push out storage "newObj"
  return newObj;
}
