/* exported difference */
// define function
function difference(first, second) {
  // storage for empty list
  var result = [];

  // iterate through first list
  for (var i = 0; i < first.length; i++) {
    // if first list item is not included in the second list,
    if (!second.includes(first[i])) {
      // put the item into the result list
      result.push(first[i]);
    }
  }

  // iterate through second list
  for (var j = 0; j < second.length; j++) {
    // if second list item is not included in the first list,
    if (!first.includes(second[j])) {
      // put the item into the result list
      result.push(second[j]);
    }
  }
  // return result
  return result;
}
