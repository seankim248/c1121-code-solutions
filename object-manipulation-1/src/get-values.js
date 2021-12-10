/* exported getValues */
// define function
function getValues(object) {
  // storage list for values
  var values = [];
  // look through the storage
  for (var key in object) {
    // put in the property value into the "values" storage
    values.push(object[key]);
  }
  // push out list of values
  return values;
}
