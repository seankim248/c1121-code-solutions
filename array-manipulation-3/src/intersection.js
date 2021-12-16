/* exported intersection */
// define function
function intersection(first, second) {
  // storage for empty list
  var result = [];

  // if first list length is greater or equal to second list length,
  if (first.length >= second.length) {
    // iterate through first list
    for (var i = 0; i < first.length; i++) {
      // if first list item is included in the second list,
      if (second.includes(first[i])) {
        // put the item into the result list
        result.push(first[i]);
      }
    }
  }

  // if second list length is greater than first list length,
  if (second.length > first.length) {
    // iterate through second list
    for (var j = 0; j < second.length; j++) {
      // if second list item is included in the first list,
      if (first.includes(second[j])) {
        // put the item into the result list
        result.push(second[j]);
      }
    }
  }
  // return result
  return result;
}
