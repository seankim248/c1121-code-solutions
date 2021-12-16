/* exported union */
// define function
function union(first, second) {
  // storage for empty list
  var result = [];

  // iterate through first list
  for (var i = 0; i < first.length; i++) {
    // if result list does not contain item,
    if (!result.includes(first[i])) {
      // put it in the result list
      result.push(first[i]);
    }
  }

  // iterate through second list
  for (var j = 0; j < second.length; j++) {
    // if result list does not contain item,
    if (!result.includes(second[j])) {
      // put it in the result list
      result.push(second[j]);
    }
  }
  // return result
  return result;
}
