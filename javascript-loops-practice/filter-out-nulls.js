/* exported filterOutNulls */
function filterOutNulls(values) {
  var valuesArr = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      valuesArr.push(values[i]);
    }
  }
  return valuesArr;
}
